import { Page , Locator , expect} from '@playwright/test'

export async function enterText(page:Page,locator:Locator,text:string) {
    await locator.fill(text)
    
}