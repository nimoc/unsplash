var assert = require('assert');
var uh = require('../uh')
describe('un.js', function() {
    describe('width=height', function() {
        it('uh(width&height)', function() {
            assert.equal(uh(200), 'https://picsum.photos/200');
            assert.equal(uh(300), 'https://picsum.photos/300');
        })
    })
    describe('width&height', function() {
        it('uh(width,height)', function() {
            assert.equal(uh(200,400), 'https://picsum.photos/200/400');
            assert.equal(uh(300,231), 'https://picsum.photos/300/231');
        })
    })
    describe('random', function() {
        it('uh(width,height, "random")', function() {
            assert.equal(uh(200,400,'random'), 'https://picsum.photos/200/400?random');
        })
        it('uh(width,height, "r")', function() {
            assert.equal(uh(1200,1400,'r'), 'https://picsum.photos/1200/1400?random');
        })
    })
    describe('g', function() {
        it('uh(g, width, height)', function() {
            assert.equal(uh('g', 200,400), 'https://picsum.photos/g/200/400');
        })
        it('uh(g, width, height, "random")', function() {
            assert.equal(uh('g', 200,400, 'random'), 'https://picsum.photos/g/200/400?random');
        })
        it('uh(g, width, height, "r")', function() {
            assert.equal(uh('g', 300,200, 'r'), 'https://picsum.photos/g/300/200?random');
        })
    })
    describe('image', function() {
        it('uh(width, height, "image=1083")', function() {
            assert.equal(uh(200,400,'image=1083'), 'https://picsum.photos/200/400?image=1083');
        })
        it('uh("g", width, height, "image=1081")', function() {
            assert.equal(uh("g",200,400,'image=1081'), 'https://picsum.photos/g/200/400?image=1081');
        })
    })
    describe('blur', function() {
        it('uh(width, height, "blur")', function() {
            assert.equal(uh(200,400,'blur'), 'https://picsum.photos/200/400?blur');
        })
    })
    describe('gravity=east', function() {
        it('uh(width, height, "gravity=east")', function() {
            assert.equal(uh(200,400,'gravity=east'), 'https://picsum.photos/200/400?gravity=east');
        })
    })
})
