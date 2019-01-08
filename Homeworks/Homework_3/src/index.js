import React from 'react';
import ReactDOM from 'react-dom';

function loadPage() {
    const component = (
        <div id="div1">
            <input type="button" id="button" value="Click to generate a color"/>
        </div>
    );
    ReactDOM.render(component, document.getElementById('root'));
}

window.addEventListener('load', onPageLoad);
        function onPageLoad() {
            console.info('page loaded');
            var button = document.getElementById('button');
            button.style.width = '12rem';
            button.style.height = '5rem';
            button.style.fontSize = '15px';
            button.style.fontWeight = 'bolder';
            button.style.margin = '1rem';
            button.addEventListener('click', function (e) {
                var p1 = document.createElement('div');
                var textColor = getRandomColor();
                p1.innerHTML = 'The text color is '+ textColor;
                p1.style.color = textColor;
                p1.style.fontWeight = 'bolder';
                var div1 = document.getElementById('div1');
                div1.appendChild(p1);
            });
            button.addEventListener('mouseenter', function (e) {
                button.style.cursor = 'pointer';
            });
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                };
                return color;
            }            
        }
