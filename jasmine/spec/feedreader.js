
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        it('URL should be defined and should not be empty', function() {
            allFeeds.map(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });
        it('name should be defined and should not be empty', function() {
            allFeeds.map(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });
    describe('The menu', function() {
        it('Menu should be hidden by default', function() {
            let menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBe(true);
        });
        it('Menu should toggle visibility on click', function() {
            let menuIcon = $('.menu-icon-link');
            let menuHidden = true;
            menuIcon.click();
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).not.toBe(true);
            menuIcon.click();
            menuHidden = $('body').hasClass('menu-hidden');
            expect(menuHidden).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });
        it('The feed container should have atleast a single element', function(){
            let entries =  $('.feed .entry');
            expect(entries.length).toBeGreaterThan(0);
        });
    });
describe('New Feed Selection', function() {
        let firstFeed;
        let nextFeed;
        beforeEach(function(done) {
            loadFeed(0, function() {
                firstFeed = $('.feed .entry')[0].innerText;
                loadFeed(1, function() {
                    nextFeed = $('.feed .entry')[0].innerText;
                    done();
                });
            });
        });
        it('The feed content should change upon new feed selection', function(){
            expect(firstFeed).not.toEqual(nextFeed);
        });
    });
}());
