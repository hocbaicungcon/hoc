window.globalProvideData('slide', '{"title":"Hãy gõ câu trả lời bằng chữ in hoa không dấu vào ô trống bên dưới\\n\\nCâu hỏi: \\n(Hàng ngang số 8 gồm 5 chữ cái)\\n“Số tự nhiên lớn hơn 1, chỉ có 2 ước gọi là số …”\\nTừ còn thiếu trong dấu … là:","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":10,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide10","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xD0A80A","alpha":100,"stop":0}]}},"id":"6nQB95amnvQ","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5kV4I8pQSSr.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6h3isvXLRhN"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5jj7yfZ0arh.InvalidPromptSlide"}}]}]},"ReviewInt_6RBFxJfjLcq":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5kV4I8pQSSr"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6RBFxJfjLcq","typea":"var","valueb":"5yN1mNR1HEt","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns10111100101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5yN1mNR1HEt.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6RBFxJfjLcq"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5yN1mNR1HEt.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6RBFxJfjLcq"}]}]}]},"ReviewIntCorrectIncorrect_6RBFxJfjLcq":{"kind":"actiongroup","actions":[]},"AnsweredInt_6RBFxJfjLcq":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6RBFxJfjLcq"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111100101"}]}]},"DisableChoices_6RBFxJfjLcq":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5kV4I8pQSSr"},"enabled":{"type":"boolean","value":false}}]},"6RBFxJfjLcq_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6h3isvXLRhN.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6RBFxJfjLcq"}]}]},"SetLayout_pxabnsnfns10111100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns10111100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns10111100101"}]}]},"NavigationRestrictionNextSlide_6nQB95amnvQ":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.68gY3ptpJxQ"}}]},"NavigationRestrictionPreviousSlide_6nQB95amnvQ":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns10111100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns10111100101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5jj7yfZ0arh","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5jj7yfZ0arh","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6RBFxJfjLcq","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6RBFxJfjLcq"}],"elseActions":[{"kind":"exe_actiongroup","id":"6RBFxJfjLcq_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6RBFxJfjLcq","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6RBFxJfjLcq","typea":"var","valueb":"5yN1mNR1HEt","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5yN1mNR1HEt"},"completed_slide_ref":{"type":"string","value":"_player.5mQ9hld2h1Q.5oGfgB7pBlf"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6RBFxJfjLcq","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6RBFxJfjLcq","typea":"var","valueb":"5yN1mNR1HEt","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5yN1mNR1HEt"},"completed_slide_ref":{"type":"string","value":"_player.5mQ9hld2h1Q.5oGfgB7pBlf"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6nQB95amnvQ"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6nQB95amnvQ"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":214,"id":"6g8vnQXv48A"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":9822,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kV4I8pQSSr"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6jzIFtiQqxn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6XA3Z6AnKkR"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"66t2Tr2xw0J"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XOwZCffG2U"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"6g8vnQXv48A"}},{"kind":"media_play","objRef":{"type":"string","value":"6g8vnQXv48A"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"6g8vnQXv48A"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6UdPa3lk6s6"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6nFWdNYx0AF"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":157,"id":"01","url":"story_content/6Zce8oc4mAE_80_DX1440_DY1440.swf","type":"normal","altText":"qm_bg5_transparent.png","width":1440,"height":893,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":540,"altText":"qm_bg5_transparent.png","pngfb":false,"pr":{"l":"Lib","i":377}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":540,"strokewidth":0}},"width":720,"height":540,"resume":true,"useHandCursor":true,"id":"6UdPa3lk6s6"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":540,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":378}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":540,"strokewidth":0}},"width":720,"height":540,"resume":true,"useHandCursor":true,"id":"6nFWdNYx0AF"},{"kind":"textinput","bindto":"_player.TextEntry7","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":256,"placeholder":"","fontsize":16,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":344,"yPos":230,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":97.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5kV4I8pQSSr","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":176,"height":30,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":347}}},"html5data":{"xPos":0,"yPos":0,"width":196,"height":30,"strokewidth":1}},"width":196,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":197,"bottom":31,"altText":"Text Entry","pngfb":false,"pr":{"l":"Lib","i":518}}},"id":"5kV4I8pQSSr","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry7","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6jzIFtiQqxn_-2089832869","id":"01","linkId":"txt__default_6jzIFtiQqxn","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":61,"height":21,"valign":"top","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Trả lời:","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":14,"fontIsBold":false,"ascent":16.634,"descent":4.038,"leading":0.793,"underlinePosition":-2.033,"underlineThickness":1.777,"xHeight":8.522}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":8,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#EF591E"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":71,"bottom":28,"pngfb":false,"pr":{"l":"Lib","i":522}}}],"shapemaskId":"","xPos":192,"yPos":230,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":40.5,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":81,"bottom":31,"altText":"Trả lời:","pngfb":false,"pr":{"l":"Lib","i":521}},"html5data":{"xPos":0,"yPos":0,"width":81,"height":31,"strokewidth":0}},"width":81,"height":31,"resume":true,"useHandCursor":true,"id":"6jzIFtiQqxn"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6aMKsP88r3e_-1914692205","id":"01","linkId":"txt__default_6XA3Z6AnKkR","type":"acctext","xPos":4,"yPos":2,"xAccOffset":4,"yAccOffset":2,"width":104,"height":28,"valign":"center","wordwrap":true,"textshadow":true,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"KIỂM TRA","style":{"fontSize":12,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":17.102,"descent":4.688,"leading":0,"underlinePosition":-1.203,"underlineThickness":0.797,"xHeight":8.734,"fontIsBold":false}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":8,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"center","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":14,"fontIsBold":true,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"shadow":{"offsetX":0.8,"offsetY":0.8,"color":"#969696"},"foregroundColor":"#FFFFFF","linkColor":"#EF591E"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":95,"bottom":28,"pngfb":false,"pr":{"l":"Lib","i":526}}}],"shapemaskId":"","xPos":512,"yPos":334,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":56,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":523}},"html5data":{"xPos":0,"yPos":0,"width":112,"height":32,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":523}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":33,"strokewidth":0}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":114,"bottom":34,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":524}},"html5data":{"xPos":-3,"yPos":-3,"width":117,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":523}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":33,"strokewidth":0}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":523}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":33,"strokewidth":0}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":114,"bottom":34,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":524}},"html5data":{"xPos":-3,"yPos":-3,"width":117,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":525}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":33,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":525}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":33,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":114,"bottom":34,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":524}},"html5data":{"xPos":-3,"yPos":-3,"width":117,"height":37,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":525}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":33,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":32,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":523}},"html5data":{"xPos":-1,"yPos":-1,"width":113,"height":33,"strokewidth":0}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-3,"top":-3,"right":114,"bottom":34,"altText":"KIỂM TRA","pngfb":false,"pr":{"l":"Lib","i":524}},"html5data":{"xPos":-3,"yPos":-3,"width":117,"height":37,"strokewidth":3}}}],"width":112,"height":32,"resume":true,"useHandCursor":true,"id":"6XA3Z6AnKkR","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#TextEntry7","typea":"var","valueb":"NGUYEN TO","typeb":"string"}]}]}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.60hEvIsIswh.5Z7YyFlV6wW"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":205,"id":"01","url":"story_content/6C5rmv2cgiM_80_DX512_DY512.swf","type":"animatedgif","altText":"Ảnh-động-slide-học-tập.gif","width":360,"height":360,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":-24,"yPos":286,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":128,"rotateYPos":128,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":256,"bottom":256,"altText":"Ảnh-động-slide-học-tập.gif","pngfb":false,"pr":{"l":"Lib","i":511}},"html5data":{"xPos":0,"yPos":0,"width":256,"height":256,"strokewidth":0}},"width":256,"height":256,"resume":true,"useHandCursor":true,"id":"66t2Tr2xw0J"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5XOwZCffG2U_-1780677841","id":"01","linkId":"txt__default_5XOwZCffG2U","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":628,"height":153,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Hãy gõ câu trả lời bằng chữ in hoa không dấu vào ô trống bên dưới","style":{"fontFamily":"\\"Times New RomanItItalicADEF8268\\",\\"Times New Roman\\"","fontSize":14,"fontIsItalic":false,"ascent":16.634,"descent":4.038,"leading":0.793,"underlinePosition":-2.033,"underlineThickness":0.911,"xHeight":8.03}},{"text":"\\n","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":14,"ascent":16.634,"descent":4.038,"leading":0.793,"underlinePosition":-2.033,"underlineThickness":0.911,"xHeight":8.349}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":66,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"\\n","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":1.172,"xHeight":10.734}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":1,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Câu hỏi","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontIsBold":false,"fontIsUnderline":true,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":2.285,"xHeight":10.957}},{"text":": \\n","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontIsBold":false,"fontIsUnderline":false,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":2.285,"xHeight":10.957}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":10,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"(","style":{"fontFamily":"\\"Times New RomanBoItalicACBDBF66\\",\\"Times New Roman\\"","fontSize":14,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"ascent":16.634,"descent":4.038,"leading":0.793,"underlinePosition":-2.033,"underlineThickness":1.777,"xHeight":8.194}},{"text":"Hàng ngang số 8 gồm 5 chữ cái)","style":{"fontFamily":"\\"Times New RomanItItalicADEF8268\\",\\"Times New Roman\\"","fontSize":14,"fontIsItalic":false,"ascent":16.634,"descent":4.038,"leading":0.793,"underlinePosition":-2.033,"underlineThickness":0.911,"xHeight":8.03}},{"text":"\\n","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontIsBold":false,"fontIsUnderline":false,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":2.285,"xHeight":10.957}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":32,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"“","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontIsBold":false,"fontIsUnderline":false,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":2.285,"xHeight":10.957}},{"text":"Số tự nhiên lớn hơn 1, chỉ có 2 ước gọi là số …”\\n","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontIsBold":false,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":2.285,"xHeight":10.957}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":50,"flowDirection":"leftToRight","cursive":false}]},{"spans":[{"text":"Từ còn thiếu trong dấu … là:","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontIsBold":false,"fontIsUnderline":false,"ascent":21.387,"descent":5.191,"leading":1.02,"underlinePosition":-2.613,"underlineThickness":2.285,"xHeight":10.957}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":28,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#EF591E"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":579,"bottom":160,"pngfb":false,"pr":{"l":"Lib","i":539}}}],"shapemaskId":"","xPos":48,"yPos":46,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":81.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":163,"altText":"Hãy gõ câu trả lời bằng chữ in hoa không dấu vào ô trống bên dưới\\n\\nCâu hỏi: \\n(Hàng ngang số 8 gồm 5 chữ cái)\\n“Số tự nhiên lớn hơn 1, chỉ có 2 ước gọi là số …”\\nTừ còn thiếu trong dấu … là:","pngfb":false,"pr":{"l":"Lib","i":538}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":163,"strokewidth":0}},"width":648,"height":163,"resume":true,"useHandCursor":true,"id":"5XOwZCffG2U"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6RBFxJfjLcq_CorrectReview","id":"01","linkId":"6RBFxJfjLcq_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":390,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":220}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Đúng","pngfb":false,"pr":{"l":"Lib","i":219}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6RBFxJfjLcq_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6RBFxJfjLcq_IncorrectReview","id":"01","linkId":"6RBFxJfjLcq_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":377,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":222}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Sai","pngfb":false,"pr":{"l":"Lib","i":221}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6RBFxJfjLcq_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');