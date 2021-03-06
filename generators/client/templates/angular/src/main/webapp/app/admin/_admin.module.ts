import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ParseLinks } from 'ng-jhipster';
<%_ if (websocket === 'spring-websocket') { _%>
import { <%=jhiPrefixCapitalized%>TrackerService } from './../shared/tracker/tracker.service';
<%_ } _%>

import { <%=angular2AppName%>SharedModule } from '../shared';

import {
    adminState,
    AuditsComponent,
    <%_ if (!skipUserManagement) { _%>
    UserMgmtComponent,
    UserDialogComponent,
    UserDeleteDialogComponent,
    UserMgmtDetailComponent,
    UserMgmtDialogComponent,
    UserMgmtDeleteDialogComponent,
    <%_ } _%>
    LogsComponent,
    <%=jhiPrefixCapitalized%>MetricsMonitoringModalComponent,
    <%=jhiPrefixCapitalized%>MetricsMonitoringComponent,
    <%=jhiPrefixCapitalized%>HealthModalComponent,
    <%=jhiPrefixCapitalized%>HealthCheckComponent,
    <%=jhiPrefixCapitalized%>ConfigurationComponent,
    <%=jhiPrefixCapitalized%>DocsComponent,
    AuditsService,
    UserService,
    <%=jhiPrefixCapitalized%>ConfigurationService,
    <%=jhiPrefixCapitalized%>HealthService,
    <%=jhiPrefixCapitalized%>MetricsService,
    <%_ if (applicationType === 'gateway') { _%>
    GatewayRoutesService,
    <%=jhiPrefixCapitalized%>GatewayComponent,
    <%_ } _%>
    <%_ if (websocket === 'spring-websocket') { _%>
    <%=jhiPrefixCapitalized%>TrackerComponent,
    <%_ } _%>
    LogsService,
    <%_ if (!skipUserManagement) { _%>
    UserResolvePagingParams,
    UserResolve,
    UserModalService
    <%_ } _%>
} from './';


@NgModule({
    imports: [
        <%=angular2AppName%>SharedModule,
        RouterModule.forRoot(adminState, { useHash: true })
    ],
    declarations: [
        AuditsComponent,
        <%_ if (!skipUserManagement) { _%>
        UserMgmtComponent,
        UserDialogComponent,
        UserDeleteDialogComponent,
        UserMgmtDetailComponent,
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        <%_ } _%>
        LogsComponent,
        <%=jhiPrefixCapitalized%>ConfigurationComponent,
        <%=jhiPrefixCapitalized%>HealthCheckComponent,
        <%=jhiPrefixCapitalized%>HealthModalComponent,
        <%=jhiPrefixCapitalized%>DocsComponent,
        <%_ if (applicationType === 'gateway') { _%>
        <%=jhiPrefixCapitalized%>GatewayComponent,
        <%_ } _%>
        <%_ if (websocket === 'spring-websocket') { _%>
        <%=jhiPrefixCapitalized%>TrackerComponent,
        <%_ } _%>
        <%=jhiPrefixCapitalized%>MetricsMonitoringComponent,
        <%=jhiPrefixCapitalized%>MetricsMonitoringModalComponent
    ],
    entryComponents: [
        <%_ if (!skipUserManagement) { _%>
        UserMgmtDialogComponent,
        UserMgmtDeleteDialogComponent,
        <%_ } _%>
        <%=jhiPrefixCapitalized%>HealthModalComponent,
        <%=jhiPrefixCapitalized%>MetricsMonitoringModalComponent,
    ],
    providers: [
        AuditsService,
        <%=jhiPrefixCapitalized%>ConfigurationService,
        <%=jhiPrefixCapitalized%>HealthService,
        <%=jhiPrefixCapitalized%>MetricsService,
        <%_ if (applicationType === 'gateway') { _%>
        GatewayRoutesService,
        <%_ } _%>
        LogsService,
        <%_ if (websocket === 'spring-websocket') { _%>
        <%=jhiPrefixCapitalized%>TrackerService,
        <%_ } _%>
        <%_ if (!skipUserManagement) { _%>
        UserService,
        UserResolvePagingParams,
        UserResolve,
        UserModalService
        <%_ } _%>
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%=angular2AppName%>AdminModule {}
