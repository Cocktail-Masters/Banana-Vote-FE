import { test, expect } from "@playwright/test";

test("event_vote", async ({ page }) => {
    
await page.goto('http://localhost:3001/ko/event');
await page.getByRole('button', { name: '종료' }).click();
await page.getByRole('button', { name: '진행중' }).click();
await page.getByRole('link', { name: 'default item image 스마트폰 추첨 이벤트 진행중 2023-07-31' }).first().click();
    
});
