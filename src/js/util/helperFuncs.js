/**
 * create a random string of some length
 * @param {number} size - length of the id
 */
export function makeid(size = 5) {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
	for (var i = 0; i < size; i++)
	  text += possible.charAt(Math.floor(Math.random() * possible.length));
  
	return text;
}