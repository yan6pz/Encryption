function ValidateForm() {
    ValidateForm.initialize = function () {
        addAreaHtml();
        validateForm();
        $('#formSubmit').on('click', function () {
            if (niceOn) {
                if (!validateNiceEdit())
                    return;
            }

            var form = $('#form');

            if (form.valid()) {
                $(this).attr('disabled', "disabled");
                var Title = $('#Title')[0].value;
                area.removeInstance('Html');
                niceOn = false;
                var Html = $('#Html')[0].value;
                addAreaHtml();

                var $form = $(this);
                $.ajax({
                    url: 'EncryptionController',
                    type: "POST",
                    data: { title: Title, html: Html },
                    success: function (data) {
                        $form.removeAttr("disabled");
                        //resetForm();
                        populateEncryptedText(data);
                        $('#error-html').empty();
                    },
                    error: function () {
                        $form.removeAttr("disabled");
                        $('#error-html').empty();

                    }
                });
            }
        });

        $('#formSubmitDecrypt').on('click', function () {
            if (niceOn) {
                if (!validateNiceEdit2())
                    return;
            }

            var form = $('#form');
            form.validate();

            if (form.valid()) {
                $(this).attr('disabled', "disabled");

                //var datum = $('#form').serialize();
                var Title = $('#Title')[0].value;
                area1.removeInstance('Encrypted');
                niceOn1 = false;
                var Encrypt = $('#Encrypted')[0].value;
                addAreaEncrypted();

                var $form = $(this);
                $.ajax({
                    url: 'DecryptionController',
                    type: "POST",
                    data: { title: Title, encrypt: Encrypt },
                    success: function (data) {
                        $form.removeAttr("disabled");
                        populateDecryptedText(data);
                        $('#error-html').empty();
                    },
                    error: function () {
                        $form.removeAttr("disabled");
                        $('#error-html').empty();

                    }
                });
            }
        });

    };

    var area;
    var area1;
    var niceOn = false;
    var niceOn1 = false;
    
    function populateDecryptedText(data) {
        if (data != null) {
            //$("#Html")[0].style.display = 'block';
            $(".nicEdit-main")[0].setContent( data );
            //addAreaEncrypted();
        }
    }

    function populateEncryptedText(data) {
        if (data != null) {
            $("#decryption")[0].style.display = 'block';
            $("#Encrypted")[0].innerHTML = data;
            if (niceOn1) {
            	$(".nicEdit-main")[0].setContent( data );
            }
            addAreaEncrypted();
        }

    }

    function addAreaHtml() {
        if (!niceOn) {
            area = new nicEditor({ fullPanel: true }).panelInstance('Html');
            niceOn = true;
        }
    };
    function addAreaEncrypted() {
        if (!niceOn1) {
            area1 = new nicEditor({ fullPanel: true }).panelInstance('Encrypted');
            niceOn1 = true;
        }
    };

    function validateForm() {
        (function () {
            $("#form").validate({
                rules: {
                    Title: {
                        required: true,
                        maxlength: 16,
                        minlength: 16
                    },
                    Html: {
                        required: true,
                        maxlength: 15000
                    }
                },
                messages: {
                    Title:
                        {
                            required: "Моля, Въведете шифър. ",
                            maxlength: "Въведете 16 битов ключ",
                            minlength: "Въведете 16 битов ключ"
                        },
                    Html:
                        {
                            required: "Моля, попълнете графата Text for encrypt.",
                            maxlength: "Не надвишавайте 15 000 символа."
                        }

                },
                onsubmit: false
            });
        })();
        $('#form').validate();
    }

    function validateNiceEdit() {
        var nicEditContent = nicEditors.findEditor('Html').getContent();
        var len = nicEditors.findEditor('Html').getContent().length;
        var errorDiv;
        if (len > 15000) {
            $('#error-html').empty();
            errorDiv = $('<span>Не надвишавайте 15 000 символа.</span>');
            $(".error").html(errorDiv.html());
            return false;
        }

        if (nicEditContent == '' || nicEditContent == null) {
            $('#error-html').empty();
            errorDiv = $('<span>Моля, попълнете графата Text for encrypt.</span>');
            $(".error").html(errorDiv.html());
            return false;
        }

        $(this).find('#Html').val(nicEditContent);
        nicEditors.findEditor('Html').saveContent();
        return true;
    }

    function validateNiceEdit2() {
        var nicEditContent = nicEditors.findEditor('Encrypted').getContent();
        var len = nicEditors.findEditor('Encrypted').getContent().length;
        var errorDiv;
        if (len > 15000) {
            $('#error-html').empty();
            errorDiv = $('<span>Не надвишавайте 15 000 символа.</span>');
            $(".error").html(errorDiv.html());
            return false;
        }

        if (nicEditContent == '' || nicEditContent == null) {
            $('#error-html').empty();
            errorDiv = $('<span>Моля, попълнете графата Encrypted text.</span>');
            $(".error").html(errorDiv.html());
            return false;
        }

        $(this).find('#Encrypted').val(nicEditContent);
        nicEditors.findEditor('Encrypted').saveContent();
        return true;
    }

    function resetForm() {
        var form = document.getElementById("form");
        form.reset();
        $('#Title').val('');
        $('#Html').val('');
        if (niceOn) {
            nicEditors.findEditor("Html").setContent('');
        }

    }

//    function displayConfirmDialog() {
//        $("#create-confirmation").text('Съобщението беше записано успешно.');
//        $("#create-confirmation").dialog({
//            title: "Confirmation",
//            resizable: true,
//            height: 300,
//            modal: true,
//            buttons: [
//                {
//                    text: 'OK',
//                    click: function () {
//                        $(this).dialog("close");
//                    }
//                },
//                {
//                    text: 'Cancel',
//                    click: function () {
//                        $(this).dialog("close");
//                    }
//                }
//            ]
//        });

//    }

//    function displayErrorDialog() {
//        $("#create-confirmation").text('Възникна грешка при записването на съобщението.');
//        $("#create-confirmation").dialog({
//            title: "Error",
//            resizable: true,
//            height: 300,
//            modal: true,
//            buttons: [
//                {
//                    text: 'OK',
//                    click: function () {
//                        $(this).dialog("close");
//                    }
//                },
//                {
//                    text: 'Cancel',
//                    click: function () {
//                        $(this).dialog("close");
//                    }
//                }
//            ]
//        });
//    }
}

