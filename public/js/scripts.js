const toggle = document.querySelector('#toggle');
const toggle_background_color = document.querySelector('.toggle_container');
const container = document.querySelector('#container');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

function switchMode(){
    switch(toggle.className){
        case "toggle_dark":
            toggle.className = 'toggle_light';
            container.className = 'container_light';
            document.querySelectorAll('.bold_text_dark').forEach((header) => {
                header.className = "bold_text_light";
            })
            sun.src = '../public/icons/dark_sun.svg';
            moon.src = '../public/icons/dark_moon.svg';
            toggle_background_color.style.backgroundColor = 'gray';
            break
        case "toggle_light":
            toggle.className = 'toggle_dark';
            container.className = 'container_dark';
            document.querySelectorAll('.bold_text_light').forEach((header) => {
                header.className = "bold_text_dark";
            })
            sun.src = '../public/icons/light_sun.svg';
            moon.src = '../public/icons/light_sun.svg';
            toggle_background_color.style.backgroundColor = '#BAE67D'
            break
    }
}