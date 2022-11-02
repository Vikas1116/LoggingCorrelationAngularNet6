import { ErrorHandler, Injectable } from '@angular/core';
import { AppInsightsService } from './services/appinsights.service';

@Injectable()
export class ApplicationInsightsErrorHandler extends ErrorHandler {

    constructor(private appInsightsService: AppInsightsService) {
        super();
    }

    override handleError(error: Error) {
        this.appInsightsService.logException(error); // Manually log exception
    }
}