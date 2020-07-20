import { Item, IExecutionContext } from '../';
import { DefaultAppDelegate } from '../';
declare class MyAppDelegate extends DefaultAppDelegate {
    constructor(logger?: any);
    executionStarted(execution: IExecutionContext): Promise<void>;
    executionEvent({ event, item, execution }: {
        event: any;
        item: any;
        execution: any;
    }): Promise<void>;
    messageThrown(messageId: any, data: any, matchingQuery: any, item: Item): Promise<void>;
    signalThrown(signalId: any, data: any, matchingQuery: any, item: Item): Promise<void>;
    serviceTask(item: any): Promise<void>;
    serviceCalled(item: any): Promise<void>;
    service1(item: any): Promise<void>;
}
export { MyAppDelegate };