(function () {
    'use strict';
    // DO NOT EDIT THIS FILE, EDIT THE GULP TASK NGCONSTANT SETTINGS INSTEAD WHICH GENERATES THIS FILE
    angular
        .module('zonesionCloudApplicationApp')
        .constant('ADMINSIDENAV',[
          {title:'课程管理'},
          {title:'自有课程',active:true},
          {title:'其他课程',active:false}
        ])
        .constant('TEACHERSIDENAV',[
          {title:'我的教学'},
          {title:'在线课程',active:true}
        ])
        .constant('STUDENTSIDENAV',[
          {title:'我的学习'},
          {title:'我的课程',active:true},
          {title:'我的问答',active:false},
          {title:'我的笔记',active:false}
        ])
        .constant('COURSETYPETABS',[{name:'普通课程',active:true,courseType:0},{name:"专业课程",active:false,courseType:1}])
        .constant('LOAD_TYPES',[{
          'type':'mp4',
          'label':'mp4',
          'extensions':['mp4']
        },
        {
          'type':'mp3',
          'label':'mp3',
          'extensions':['mp3']
        },
        {
          'type':'ppt',
          'label':'ppt',
          'extensions':['ppt','pptx']
        }])
        .constant('LESSONTYPES',[{
          name:'视频',
          checked:true,
          content:'视频',
          type:'mp4',
          timeTitle:'视频时长',
          lessonType:'0'

        },
        {
          name:'音频',
          checked:false,
          content:'音频',
          type:'mp3',
          timeTitle:'音频时长',
          lessonType:'1'
        },
        {
          name:'图文',
          checked:false,
          content:'内容',
          type:'text',
          timeTitle:'',
          lessonType:'2'
        },
        {
          name:'PPT',
          checked:false,
          content:'ppt',
          type:'ppt',
          timeTitle:'',
          lessonType:'3'
        }])
        .constant('EDITOROPTIONS',{
	      language: 'zh-cn',
	      image_previewText:' ',
	      allowedContent: true,
	      extraPlugins : 'widget,filetools,notification,lineutils,notificationaggregator,uploadwidget,uploadimage',
	      filebrowserImageUploadUrl: '/api/file/image-upload?type=Images',
	      filebrowserWindowHeight: '240',
	      disallowedContent:'script; *[on*];*{*javascript*}',
	      toolbar :[
	        { name: 'tools', items: [ 'Maximize'] },
    		{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
    		{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
    		{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent',  '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
    		{ name: 'links', items: [ 'Link', 'Unlink' ] },
    		{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar', 'PageBreak'] },
    		{ name: 'colors', items: [  'TextColor', 'BGColor', 'Format'] },
    		{ name: 'styles', items: [ 'Styles', 'Font', 'FontSize' ] },
	        { name: 'document', items: [ 'Source'] }
	      ],
	      on: {
	        instanceReady: function () {
	          setTimeout(function () {
	            $('.cke_reset iframe').contents().find('body').css('background-color','##fff');
	            $('.cke_reset iframe').contents().find('body').css('margin','0px');
	          }, 100);
	        }
	      }
	    })
;
})();
