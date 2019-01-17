import '../kwc-social-comments.js';

suite('kwc-social-comments', () => {
    test('instantiating the element works', () => {
        const element = document.createElement('kwc-social-comments');
        assert(element instanceof customElements.get('kwc-social-comments'));
    });
});
