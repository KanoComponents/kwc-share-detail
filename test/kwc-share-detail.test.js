import '../kwc-share-detail.js';

suite('kwc-share-detail', () => {
    test('instantiating the element works', () => {
        const element = document.createElement('kwc-share-detail');
        assert.equal(element.is, 'kwc-share-detail');
    });
});
