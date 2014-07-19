package encrypt.decrypt.pck;

import javax.crypto.*;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Base64; 

public class CustomEncryptor {

		//Method for encryption given string 'strToEncrypt' with AES algorithm. 'encrKey' is the key given by user.
	    public static String encrypt(String strToEncrypt,String encrKey) throws Exception
	    {
	        try
	        {
	        	
	        	 Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
	             final SecretKeySpec secretKey = new SecretKeySpec(encrKey.getBytes(), "AES");
	             cipher.init(Cipher.ENCRYPT_MODE, secretKey);
	             //convert the text for encryption to bytes and then back to base64
	             final String encryptedString = Base64.encodeBase64String(cipher.doFinal(strToEncrypt.getBytes("UTF-8")));
	            return encryptedString;
	        }
	        
	        catch (Exception e)
	        {
	            return null;
	        }     
	    }
	    
	    public static String decrypt(String strToDecrypt,String encrKey) throws Exception
	    {
	        try
	        {
	        	
	        	 Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");
	             final SecretKeySpec secretKey = new SecretKeySpec(encrKey.getBytes(), "AES");
	             cipher.init(Cipher.DECRYPT_MODE, secretKey);
	             final String encryptedString =  new String(cipher.doFinal(Base64.decodeBase64(strToDecrypt)),"UTF-8");
	            return encryptedString;
	        }
	        
	        catch (Exception e)
	        {
	            return null;
	        }
	     

	    }
}
