package encrypt.decrypt.pck;

import java.io.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class StringEncrypting {
	
	 public static String Encrypt(String textForEncryption,String key) {
		 
	               String value= AESEncryption(textForEncryption,key);
	               writeToFile(value);
	               return value;	        

	    }
	 

	 public static String Decrypt(String textForEncryption,String key) {
		 
		 String value= AESDecryption(textForEncryption,key);
         return value;        

}
	

	    private static String AESDecryption(String strToEncrypt,String key)
	    {
	          String encryptedStr="";
	         
	        try {
	            encryptedStr = CustomEncryptor.decrypt(strToEncrypt.trim(),key);
	        } 
	        catch (Exception ex) {
	            Logger.getLogger(StringEncrypting.class.getName()).log(Level.SEVERE, null, ex);
	        }
	                return encryptedStr;
	    }
	    
	    private static String AESEncryption(String strToEncrypt,String key)
	    {
	          String encryptedStr="";
	         
	        try {
	            encryptedStr = CustomEncryptor.encrypt(strToEncrypt.trim(),key);
	        } 
	        catch (Exception ex) {
	            Logger.getLogger(StringEncrypting.class.getName()).log(Level.SEVERE, null, ex);
	        }
	                return encryptedStr;
	    }
	    
	    private static Boolean writeToFile(String line)
	    {
	    	//Writer writer = null;
	    	BufferedWriter bWriter = null;
	    	try {
				bWriter = new BufferedWriter(new FileWriter("C:\\WWWProject\\EncryptedTest.txt", true));
				bWriter.append(line);
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					bWriter.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
	    	
	    	return true;
	    }
	    
		 /*public static void main(String[] args) {
	       BufferedReader reader;
	       //default key
	       String key="WWW2014YanislavS";
	       System.out.println("Въведете 16 символен стринг за ключ към криптирането: ");
	       

	   	
	        try {
	            BufferedReader bufferRead = new BufferedReader(new InputStreamReader(System.in));
		   	    String sKey = bufferRead.readLine();
		   	    if(sKey == null || sKey.isEmpty())
		   	    	sKey=key;
		   	    
	            reader = new BufferedReader(new FileReader("C:\\WWWProject\\Test.txt"));
	            String line = null;
	            while ((line = reader.readLine()) != null) {
	               String value= AESEncryption(line,sKey);
	               writeToFile(value);
	            }
	            
	        } catch (IOException ex) {
	            Logger.getLogger(StringEncrypting.class.getName()).log(Level.SEVERE, null, ex);
	        }
	        

	    }*/

}
