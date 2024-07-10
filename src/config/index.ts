import {devConfig} from './dev.config';
import {prodConfig} from './prod.config';

const ENVIRONMENT = 'DEV';

export const config = ENVIRONMENT === 'DEV' ? devConfig : prodConfig;
