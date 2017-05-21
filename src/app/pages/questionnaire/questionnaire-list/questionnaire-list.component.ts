import { Pages } from './../../pages.component';
import { Component, OnInit } from '@angular/core';

import { Subscription }   from 'rxjs/Subscription';
import { QuestionnaireService } from '../../../services/questionnaire'

@Component({
  selector: 'app-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.scss']
})
export class QuestionnaireListComponent implements OnInit {
   questionnaireTypes=[
        {
           questionnaireStage:"产品调研阶段",
           questionnaireGenreDetail:[
               {
                 id:1,
                 title:"市场调研"  
              },
               {
                 id:2,
                 title:"用户偏好调研"  
              },
               {
                 id:3,
                 title:"消费者行为调研"  
              },
               {
                 id:4,
                 title:"产品使用习惯调研"  
              }
           ]
            
        },
        {
           questionnaireStage:"产品研发阶段",
           questionnaireGenreDetail:[
              {
                 id:5,
                 title:"功能体验调研"  
              },
               {
                 id:6,
                 title:"性能体验调研"  
              },
               {
                 id:7,
                 title:"操作流程体验调研"  
              },
               {
                 id:8,
                 title:"页面展示效果体验"  
              }
           ]
        },{
           questionnaireStage:"产品发布前",
           questionnaireGenreDetail:[
              {
                 id:9,
                 title:"价格接受度调研"  
              },
               {
                 id:10,
                 title:"产品名称测试"  
              },
               {
                 id:11,
                 title:"用户触媒习惯调研"  
              },
               {
                 id:12,
                 title:"广告语测试"  
              }
           ]
        },{
           questionnaireStage:"产品发布后",
           questionnaireGenreDetail:[
              {
                 id:13,
                 title:"用户满意度调研"  
              },
               {
                 id:14,
                 title:"活动效果评估"  
              },
               {
                 id:15,
                 title:"产品服务质量测评"  
              },
               {
                 id:16,
                 title:"广告效果评估"  
              }
           ]
        },
        {
           questionnaireStage:"产品战略",
           questionnaireGenreDetail:[
              {
                 id:17,
                 title:"产品定义"  
              }
           ]
        },{
           questionnaireStage:"产品品质",
           questionnaireGenreDetail:[
              {
                 id:18,
                 title:"产品体验"  
              }
           ]
        }
    ];
  isList=true;
  isShowSelectTab=false;
  currentStatus="全部状态";
  constructor(public Qs:QuestionnaireService,) {

   }

  ngOnInit() {
    
  }
  statusChanged(state){
    if(state==0){
       this.currentStatus="全部状态";
    }else if(state==1){
       this.currentStatus="未发布";
    }else {
       this.currentStatus="已发布";
    }
    this.isShowSelectTab=false;
  }
  loadList(searchKey,Pages){
      /*this.Qs.getList().subscribe(
             data=> { 
               
      });*/
  }
}
