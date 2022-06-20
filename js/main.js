;(function init(){
    
    const run = () => {

        const menu = document.getElementById('menu');
        const menuLinks = menu.children;
        const hamburger = document.getElementById('hamburger');
        const htmlRoot = document.documentElement;
        const heroSection = document.getElementById('home');
        // const menuItems = document.getElementsByClassName('menu-item');
        const overviewSection = document.getElementById('overview');
        // const projectsSection = document.getElementById('projects');
        // const aboutMeSection = document.getElementById('aboutme');
        // const contactSection = document.getElementById('contact');
        const progressBar = document.getElementById('progressBar');
        const downBtn = document.getElementsByClassName('btn-arrow-down')[0];


        const openMenu = () => {
            if(window.innerWidth < 1024){
                menu.classList.add('open');
            }
        }

        const closeMenu = () => {
            if(window.innerWidth < 1024){
                menu.classList.remove('open');
            }
        }


        const scrollToOverview = () => {
            overviewSection.scrollIntoView(true);
        }

        const showProgressBar = (evt) => {
            closeMenu();
            let newProgressBarWidth = 0;
            if(window.scrollY >= overviewSection.offsetTop){
                // show progress bar
                progressBar.style.top = 0 + 'px';

                // convert scroll length to progress bar width using linear conversion: scroll range to progress bar width range
                
                // the maximum scroll height is the entire html element height minus hero and 100vh 
                // since we cannot scroll to the absolute bottom of the document
                let scrollYMax = document.documentElement.scrollHeight - heroSection.offsetHeight - document.documentElement.clientHeight;
                
                let currrentScrollY = window.scrollY - heroSection.offsetHeight;
                
                let progressBarMaxWidth = document.documentElement.scrollWidth;
                
                let currentProgressBarWidth = progressBar.getBoundingClientRect().width;
                
                
                // The formula used: newValue = (((oldVal - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin
                newProgressBarWidth = parseInt((currrentScrollY * progressBarMaxWidth) / scrollYMax); 

                progressBar.style.width = newProgressBarWidth + 'px';
            } else {
                // hide progress
                progressBar.style.top = -8 + 'px';
            }
        }

        for(let menuLink of menuLinks){
            menuLink.onClick = closeMenu;
        }

        /* add listeners to each menu-item */
        /* add listeners to each menu-item */

        hamburger.addEventListener('click', openMenu, false);
        console.log(hamburger);

        downBtn.addEventListener('click', scrollToOverview, false);

        htmlRoot.addEventListener('click', (evt) => {
            if(evt.target !== menu && !(evt.target.classList.contains('menu-btn'))){
                closeMenu();
            }
        });

        // adjust progress bar on window scroll and on resize
        window.addEventListener('scroll', showProgressBar);
        window.addEventListener('resize', showProgressBar); 

    }

    window.addEventListener('load', run, false);
})();