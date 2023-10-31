const pick = (object, keys) =>
	keys.reduce((object_, key) => {
		if (object && Object.prototype.hasOwnProperty.call(object, key)) {
			object_[String(key)] = object[String(key)]
		}
		return object_
	}, {})

export default pick
