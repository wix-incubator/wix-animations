import {Engine} from 'velocity';
import requireReload from 'require-reload';

function loadJson(filename) {
  try {
    const reload = requireReload(require);
    return reload(filename);
  } catch (e) {}
}

export function renderVM(template, data) {
  const engine = new Engine({template});
  const velocityData = loadJson('../../velocity.data.js');
  const velocityDataPrivate = loadJson('../../velocity.private.data.js');
  return engine.render(Object.assign({}, velocityData, velocityDataPrivate, data));
}
