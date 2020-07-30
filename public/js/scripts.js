const toggle = document.querySelector('#toggle');
const toggle_background_color = document.querySelector('.toggle_container');
const container = document.querySelector('#container');

function switchMode(){
    switch(toggle.className){
        //SWITCHES TO LIGHT MODE
        case "toggle_dark":
            toggle.className = 'toggle_light';
            container.className = 'container_light';
            document.querySelectorAll('.bold_text_dark').forEach((header) => {
                header.className = "bold_text_light";
            })
            document.querySelectorAll('.light_text').forEach((text) => {
                text.className = "damp_text";
            })
            toggle_background_color.style.backgroundColor = 'gray';
            break
        //SWITCHES TO DARK MODE
        case "toggle_light":
            toggle.className = 'toggle_dark';
            container.className = 'container_dark';
            document.querySelectorAll('.bold_text_light').forEach((header) => {
                header.className = "bold_text_dark";
            })
            document.querySelectorAll('.damp_text').forEach((text) => {
                text.className = "light_text";
            })
            toggle_background_color.style.backgroundColor = '#BAE67D'
            break
    }
}