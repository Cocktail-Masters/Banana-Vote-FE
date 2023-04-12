import { test, chromium } from "@playwright/test";

const BASE_URL = "http://localhost:3001";

test("home", async ({ page }) => {
  // 페이지 이동
  await page.goto(BASE_URL + "/ko/home");

  // 전체화면으로 설정합니다.
  await page.evaluate(() => {
    document.documentElement.requestFullscreen();
  });
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.waitForTimeout(200);

  // recommend 박스 slick 이동
  const left = await page.locator("#slick-prev-arrow");
  const right = await page.locator("#slick-next-arrow");
  await left.click();
  await page.waitForTimeout(1000);
  await right.click();
  await page.waitForTimeout(1000);
  await left.click();
  await page.waitForTimeout(1000);
  await right.click();
  await page.waitForTimeout(1000);

  // recommend 박스 글 클릭
  // const selected = page.locator(".recommend-title").first();
  // await selected.click();
  // await page.waitForTimeout(1000);
  // await page.goBack();

  // 시즌 랭킹 더보기 클릭
  await page.locator(".see-more-ranking").first().click();
  await page.waitForTimeout(1000);
  await page.goBack();

  // 브라우저 종료
  await page.close();
});
