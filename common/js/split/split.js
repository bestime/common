

import _String from './_String'
import isEmpty from './isEmpty'

function split (str, flag) {
	return isEmpty(str) ? [] : _String(str).split(_String(flag))
}

export default split