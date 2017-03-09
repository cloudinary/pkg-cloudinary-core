import { Cloudinary, ConfigurationOptions, VideoTagInterface } from '../../cloudinary-core';
import 'jasmine';
import { jsdom } from 'jsdom';

describe('Cloudinary', () => {

    let config: ConfigurationOptions;
    let cld: Cloudinary;

    beforeEach(() => {
        config = { cloud_name: 'demo' };
        cld = new Cloudinary(config);
    });

    describe('url', () => {

        it('produces HTTP URLs', () => {
            expect(cld.url('sample')).toEqual('http://res.cloudinary.com/demo/image/upload/sample');
        });
        it('produces secure URLs', () => {
            expect(cld.url('sample', {
                secure: true
            })).toEqual('https://res.cloudinary.com/demo/image/upload/sample');
        });
        it('produces transformations', () => {
            expect(cld.url('sample', {
                angle: 35
            })).toEqual('http://res.cloudinary.com/demo/image/upload/a_35/sample');
        });
        it('mixes configuration and transformation options', () => {
            expect(cld.url('sample', {
                secure: true,
                cloud_name: 'other_cloud',
                fetchFormat: 'auto',
                quality: 'auto'
            })).toEqual('https://res.cloudinary.com/other_cloud/image/upload/f_auto,q_auto/sample');
        });
        it('chains transformations', () => {
            expect(cld.url('sample', {
                transformation: [
                    {
                        'if': 'w_lt_200',
                        crop: 'fill',
                        height: 120,
                        width: 80
                    }, {
                        'if': 'w_gt_400',
                        crop: 'fit',
                        width: 150,
                        height: 150
                    }, {
                        effect: 'sepia'
                    }
                ]
            })).toEqual('http://res.cloudinary.com/demo/image/upload/if_w_lt_200,c_fill,h_120,w_80/if_w_gt_400,c_fit,h_150,w_150/e_sepia/sample');
        });
    });

    describe('image', () => {
        const publicId = 'imagePublicId';
        beforeEach(() => {
            const doc = jsdom('<!doctype html><html><body></body></html>');
            (<any>global).document = doc;
            (<any>global).window = doc.defaultView;
        });

        it('creates an image element', () => {
            spyOn(document, 'createElement').and.callThrough();
            const image: HTMLImageElement = cld.image(publicId);
            expect(image.src).toEqual(`http://res.cloudinary.com/demo/image/upload/${publicId}`);
            expect(document.createElement).toHaveBeenCalled();
        });
    });

    describe('video', () => {
        const publicId = 'videoPublicId';
        beforeEach(() => {
            const doc = jsdom('<!doctype html><html><body></body></html>');
            (<any>global).document = doc;
            (<any>global).window = doc.defaultView;
        });

        it('creates a video element', () => {
            spyOn(document, 'createElement').and.callThrough();
            const video: string = cld.video(publicId);
            expect(video).toEqual(`<video poster="http://res.cloudinary.com/demo/video/upload/${publicId}.jpg"><source src="http://res.cloudinary.com/demo/video/upload/${publicId}.webm" type="video/webm"><source src="http://res.cloudinary.com/demo/video/upload/${publicId}.mp4" type="video/mp4"><source src="http://res.cloudinary.com/demo/video/upload/${publicId}.ogv" type="video/ogg"></video>`);
        });
        it('creates a video tag', () => {
            spyOn(document, 'createElement').and.callThrough();
            const video: VideoTagInterface = cld.videoTag(publicId);
            expect(video.getOption('source_types')).toEqual(['webm', 'mp4', 'ogv']);
        });
    });

    describe('transformations', () => {
        it('converts transformatikon options to a string', () => {
            expect(cld.transformation_string({
                border: '4px_solid_black',
                fetchFormat: 'auto',
                opacity: 30
            })).toEqual('bo_4px_solid_black,f_auto,o_30');
        });
    });

    describe('Social', () => {
        it('fetches Facebook profile images', () => {
            const image: HTMLImageElement = cld.facebook_profile_image('officialchucknorrispage', 
            {
                secure: true,
                responsive: true,
                effect: 'art:hokusai'
            });
            const expectedImageUrl = 'https://res.cloudinary.com/demo/image/facebook/e_art:hokusai/officialchucknorrispage';
            expect(image.src).toEqual(expectedImageUrl);
            expect(image.getAttribute('data-src-cache')).toEqual(expectedImageUrl);
        });
    });
});

