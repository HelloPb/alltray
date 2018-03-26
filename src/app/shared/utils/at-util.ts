import { Subscription } from 'rxjs/Subscription';

export class AtUtil {

    public static unsubscribe(subscriptions: Subscription[]): void {
        subscriptions.forEach( subscription => subscription.unsubscribe());
    }
}
