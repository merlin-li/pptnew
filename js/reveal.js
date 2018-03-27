(function() {
    // Fake loading.
    setTimeout(init, 1000);

    function init() {
        document.body.classList.remove('loading');

        //************************ Example 1 - reveal on load ********************************
        
        var rev1 = new RevealFx(document.querySelector('#rev-1'), {
            revealSettings : {
                bgcolor: '#e35600',
                onCover: function(contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                }
            }
        });
        rev1.reveal();

        var rev2 = new RevealFx(document.querySelector('#rev-2'), {
            revealSettings : {
                bgcolor: '#fff',
                delay: 200,
                onCover: function(contentEl, revealerEl) {
                    contentEl.style.opacity = 1;
                }
            }
        });
        rev2.reveal();

        //************************ Example 2 - reveal on scroll ********************************
        
        var scrollElemToWatch_1 = document.getElementById('rev-3'),
            watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -100),                
            rev3 = new RevealFx(scrollElemToWatch_1, {
                revealSettings : {
                    bgcolor: '#e35600',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev4 = new RevealFx(document.querySelector('#rev-4'), {
                revealSettings : {
                    bgcolor: '#fff',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_2 = document.getElementById('rev-5'),
            watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -100),
            rev5 = new RevealFx(scrollElemToWatch_2, {
                revealSettings : {
                    bgcolor: '#e35600',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_3 = document.getElementById('rev-6'),
            watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -100),
            rev6 = new RevealFx(scrollElemToWatch_3, {
                revealSettings : {
                    bgcolor: '#e35600',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_4 = document.getElementById('rev-7'),
            watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -100),
            rev7 = new RevealFx(scrollElemToWatch_4, {
                revealSettings : {
                    bgcolor: '#e35600',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),
            rev8 = new RevealFx(document.querySelector('#rev-8'), {
                revealSettings : {
                    bgcolor: '#fff',
                    delay: 250,
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_5 = document.getElementById('rev-9'),
            watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -100),
            rev9 = new RevealFx(scrollElemToWatch_5, {
                revealSettings : {
                    bgcolor: '#e35600',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_6 = document.getElementById('rev-10'),
            watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -100),
            rev10 = new RevealFx(scrollElemToWatch_6, {
                revealSettings : {
                    bgcolor: '#fff',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_7 = document.getElementById('rev-11'),
            watcher_7 = scrollMonitor.create(scrollElemToWatch_7, -100),
            rev11 = new RevealFx(scrollElemToWatch_7, {
                revealSettings : {
                    bgcolor: '#fff',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_8 = document.getElementById('rev-12'),
            watcher_8 = scrollMonitor.create(scrollElemToWatch_8, -100),
            rev12 = new RevealFx(scrollElemToWatch_8, {
                revealSettings : {
                    bgcolor: '#fff',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            }),

            scrollElemToWatch_9 = document.getElementById('rev-13'),
            watcher_9 = scrollMonitor.create(scrollElemToWatch_9, -100),
            rev13 = new RevealFx(scrollElemToWatch_9, {
                revealSettings : {
                    bgcolor: '#e35600',
                    direction: 'rl',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }
            });

        watcher_1.enterViewport(function() {
            rev3.reveal();
            rev4.reveal();
            watcher_1.destroy();
        });
        watcher_2.enterViewport(function() {
            rev5.reveal();
            watcher_2.destroy();
        });
        watcher_3.enterViewport(function() {
            rev6.reveal();
            watcher_3.destroy();
        });
        watcher_4.enterViewport(function() {
            rev7.reveal();
            rev8.reveal();
            watcher_4.destroy();
        });
        watcher_5.enterViewport(function() {
            rev9.reveal();
            watcher_5.destroy();
        });
        watcher_6.enterViewport(function() {
            rev10.reveal();
            watcher_6.destroy();
        });
        watcher_7.enterViewport(function() {
            rev11.reveal();
            watcher_7.destroy();
        });
        watcher_8.enterViewport(function() {
            rev12.reveal();
            watcher_8.destroy();
        });
        watcher_9.enterViewport(function() {
            rev13.reveal();
            watcher_9.destroy();
        });





        //************************ Example 3 - api examples ********************************
        
        var rev14 = new RevealFx(document.querySelector('#rev-14')),
            trigger_1 = document.getElementById('rev-trigger-1'),
            trigger_2 = document.getElementById('rev-trigger-2'),
            trigger_3 = document.getElementById('rev-trigger-3'),
            trigger_4 = document.getElementById('rev-trigger-4'),
            trigger_5 = document.getElementById('rev-trigger-5');
        
        trigger_1.addEventListener('click', function() {
            rev14.reveal({
                bgcolor: '#c1c0b7',
                duration: 300,
                onStart: function(contentEl, revealerEl) { contentEl.style.opacity = 0; },
                onCover: function(contentEl, revealerEl) { contentEl.style.opacity = 1; }
            });
        });

        trigger_2.addEventListener('click', function() {
            rev14.reveal({
                bgcolor: '#c1c0b7',
                duration: 300,
                direction: 'rl',
                onStart: function(contentEl, revealerEl) { contentEl.style.opacity = 0; },
                onCover: function(contentEl, revealerEl) { contentEl.style.opacity = 1; }
            });
        });

        trigger_3.addEventListener('click', function() {
            rev14.reveal({
                bgcolor: '#c1c0b7',
                easing: 'easeOutExpo',
                direction: 'bt',
                onStart: function(contentEl, revealerEl) { 
                    anime.remove(contentEl);
                    contentEl.style.opacity = 0; 
                },
                onCover: function(contentEl, revealerEl) { 
                    anime({
                        targets: contentEl,
                        duration: 800,
                        delay: 80,
                        easing: 'easeOutExpo',
                        translateY: [40,0],
                        opacity: [0,1]
                    });
                }
            });
        });

        trigger_4.addEventListener('click', function() {
            rev14.reveal({
                bgcolor: '#c1c0b7',
                duration: 300,
                direction: 'tb',
                onStart: function(contentEl, revealerEl) { 
                    anime.remove(contentEl);
                    contentEl.style.opacity = 0; 
                },
                onCover: function(contentEl, revealerEl) { 
                    anime({
                        targets: contentEl,
                        duration: 500,
                        delay: 50,
                        easing: 'easeOutBounce',
                        translateY: [-40,0],
                        opacity: {
                            value: [0,1],
                            duration: 300,
                            easing: 'linear'
                        }
                    });
                }
            });
        });

        trigger_5.addEventListener('click', function() {
            rev14.reveal({
                bgcolor: '#7f40f1',
                duration: 400,
                easing: 'easeInOutQuad',
                onStart: function(contentEl, revealerEl) { 
                    anime.remove(contentEl);
                    contentEl.style.opacity = 0; 
                },
                onCover: function(contentEl, revealerEl) { 
                    contentEl.style.opacity = 1; 
                    anime({
                        targets: contentEl,
                        duration: 800,
                        delay: 80,
                        easing: 'easeOutExpo',
                        scale: [0.5,1],
                        opacity: [0,1]
                    });
                }
            });
        });
    }
})();