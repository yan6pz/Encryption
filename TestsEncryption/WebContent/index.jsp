<%@ page language="java" contentType="text/html;" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;	charset=UTF-8">
<title>WWW Project</title>
</head>
<body>
<h2>Криптиране и декрептиране на въпроси и отговори</h2>
<script src="JavaScript/jquery-1.7.1.js" type="text/javascript"></script>
<script src="JavaScript/jquery.validate.js" type="text/javascript"></script>
<script src="ValidateForm.js" type="text/javascript"></script>
<script src="JavaScript/nicEdit.js" type="text/javascript"></script>
<link href="Styles/Site.css" rel="stylesheet" type="text/css" />

<form action="EncryptionController" method="post" id="form">
        <fieldset>


            <div class="editor-field">
                <b>Chipher:</b>
                <input type="text" name="Title" id="Title"/>
            </div>
        
            <div class="editor-field">
                <b>Text for encrypt:</b>
                <div class="nicEditArea">
                <textarea rows="10" cols="10" name="Html" id="Html"></textarea>
                </div>
            </div>
            <div class="error" id="error-html">
    
            </div>
            <p>
                <input type="button" value="Криптирай" id="formSubmit" />
            </p>
            <div style="display: none" id="decryption">
                <div class="editor-field">
                    <b >Encrypted text:</b>
                    <div class="nicEditArea">
                    <textarea rows="10" cols="10" name="Encrypted" id="Encrypted" ></textarea>
                    </div>
                </div>
                <p>
                    <input type="button" value="Декриптирай" id="formSubmitDecrypt"  />
                </p>
            </div>
        </fieldset>
</form>


<script type="text/javascript">

    $(document).ready(function () {
        ValidateForm();
        ValidateForm.initialize();
    });

</script>
</body>
</html>