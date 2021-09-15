import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the jupyterlab-tutorial extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-tutorial:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-tutorial is activated!');

    requestAPI<any>('get_example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jupyterlab-tutorial server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
