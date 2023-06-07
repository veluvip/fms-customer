import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../services/config.service';


const CONFIG_VALUES_TOKEN = new InjectionToken<string>('CONFIG_VALUES_TOKEN');

export function initializerFactory(env: ConfigService, configUrl : string): any {

  const promise = env.init(configUrl).then(() => {
    console.log(env.getSetting("apiURL"));
  });
  return () => promise;
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConfigModule { 

  static forRoot(configFile :string){
    return {
      ngModule : ConfigModule,
      providers: [
        ConfigService,
        { 
          provide : CONFIG_VALUES_TOKEN , 
          useValue : configFile 
        },
        { 
          provide : APP_INITIALIZER, 
          useFactory : initializerFactory,
          deps:[ConfigService,CONFIG_VALUES_TOKEN],
          multi : true 
        }
      ]
    };
  }

}
