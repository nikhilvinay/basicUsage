
	//This function will let you know how to use async library .. for installation use npm install async --save
     
     async.parallel({
						webpush:function(callback) {
                                                self.sendWebPushNotification(newlyInsertedId, notificationData,
                                                    function (webError, webResp) {
                                                        callback(webError,webResp);
                                                    });
                                            },
                                            email:function(callback){
                                                self.sendEmailNotification(function(emailError,emailResp){
                                                    callback(emailError,emailResp);
                                                });
                                            }
                                        }, function (parallelError,parallelResp) {
                                            if(isNull(parallelError)){
                                                callback(false,self.notificationMessage.parallelAsyncError)
                                            }else{
                                                callback(false,self.notificationMessage.parallelAsyncError)
                                            }
                                        });