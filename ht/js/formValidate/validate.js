$(function () {
    $("#defaultForm").formValidation({
        /*     err: {										//tooltip 提示 （删除后为默认下方提示）
                 container: 'tooltip'
             },*/
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {

            PersonName: {//表单name
                message: '用户名无效',//message 默认提示信息
                validators: {
                    notEmpty: {
                        message: '用户名必须设置'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名必须在6-30个字符之间'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: '用户名只能由字母、数字、点和下划线组成。'
                    }
                }
            },
            CredentialsID:{
                validators: {
                    notEmpty: {
                        message: '身份证号码必须填写'
                    },
                    regexp: {
                        regexp: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/,
                        message: '请输入正确的身份证号码'
                    }
                }
            },
            Gender: {
                validators: {
                    notEmpty: {
                        message: '必须选择一个性别'
                    }
                }
            },
            // EthnicGroup  民族
            NativePlace: {
                validators: {
                    notEmpty: {
                        message: '不能为空'
                    }
                }
            },
            IsTaiwan: {
                validators: {
                    notEmpty: {
                        message: '必须选择一个性别'
                    }
                }
            },
            Birthday: {
                validators: {
                    notEmpty: {
                        message: '日期不能为空'
                    },
                    date: {
                        format: 'YYYY-MM-DD'
                    }
                }
            }
            ////////////////////////////////////////////////////
            /*   email: {
                   validators: {
                       notEmpty: {
                           message: '电子邮件不能为空'
                       },
                       emailAddress: {
                           message: '请输入有效的电子邮件地址'
                       }
                   }
               },
               password: {
                   validators: {
                       notEmpty: {
                           message: '密码不能为空'
                       },
                       different: {
                           field: 'username',
                           message: '密码不能和用户名相同'
                       }
                   }
               },

               captcha: {
                   validators: {
                       callback: {
                           message: 'Wrong answer',
                           callback: function(value, validator, $field) {
                               var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
                               return value == sum;
                           }
                       }
                   }
               },
               agree: {
                   validators: {
                       notEmpty: {
                           message: '你必须同意遵守条款和条件'
                       }
                   }
               },
               monthDayYear: {
                   validators: {
                       notEmpty: {
                           message: '日期不能为空'
                       },
                       date: {
                           format: 'MM/DD/YYYY'
                       }
                   }
               },

               confirmPassword: {
                   validators: {
                       notEmpty: {
                           message: '确认密码不能为空'
                       },
                       identical: {
                           field: 'password',
                           message: '确认密码和密码不一致。'
                       }
                   }
               },
               thirdFile: {
                   validators: {
                       notEmpty: {
                           message: '不能为空'
                       },
                       file: {
                           extension: 'image',
                           type: 'application/pdf',
                           maxSize: 10*1024*1024,
                           message: '请选择小于10M的PDF文件。'
                       }
                   }
               },
               'browsers[]': {
                   validators: {
                       notEmpty: {
                           message: '不能为空'
                       }
                   }
               }*/
        }
    });

})
