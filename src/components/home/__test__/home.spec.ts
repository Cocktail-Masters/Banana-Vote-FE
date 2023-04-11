import { test, chromium } from "@playwright/test";

const BASE_URL = "http://localhost:3001";

test("feed", async ({ page }) => {
  // 페이지 이동
  await page.goto(BASE_URL + "/ko/home");

  // 전체화면으로 설정합니다.
  await page.evaluate(() => {
    document.documentElement.requestFullscreen();
  });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(200);

  // 브라우저 종료
  await page.close();
});
