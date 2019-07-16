import bycrpt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 *
 *
 * @export
 * @class encrypt
 */
/**
   *
   * Encrypt User Password
   * @static
   * @param {string} password
   * @returns {string} Encrypted Password
   * @memberof encrypt
   */
export const encryptPassword = (password) => {
	return bycrpt.hashSync(password, 10);
};

/**
   *
   * Decrypt User Password
   * @static
   * @param {string} inputPassword
   * @param {string} encryptedPassword
   * @returns {boolen} True if valid
   * @memberof encrypt
   */
export const decryptPassword = (inputPassword, encryptedPassword) => {
	return bycrpt.compareSync(inputPassword, encryptedPassword);
};

/**
   *
   * Generate user token
   * @static
   * @param {object} user
   * @returns {string} Token
   * @memberof encrypt
   */
export const generateToken = (user) => {
	const payload = { id: user.id, email: user.email };
	const token = jwt.sign(payload, '123456', {
		expiresIn: '24h'
	});
	return token;
};

