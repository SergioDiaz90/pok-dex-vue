'use strict'

import { config_service } from './config';


let endpoint = '1';
export let platzi_music = fetch ( `${ config_service }/${ endpoint }` )
	.then( res => {
		return res.text;
	})
