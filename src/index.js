import _ from 'lodash';
import './style.css';
import ImageFile from './image.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello Webpack'], ' ');
  element.classList.add('goodbye');

  let imageTag = new Image();
  imageTag.src = ImageFile;

  element.appendChild(imageTag);

  return element;
}

document.body.appendChild(component());
