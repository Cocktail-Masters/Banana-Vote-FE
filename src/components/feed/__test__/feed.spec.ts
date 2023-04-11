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

  // 무한스크롤 테스트
  // for (let i = 0; i < 10; i++) {
  //   await page.evaluate((param) => {
  //     console.log(param);
  //     window.scrollBy(2000, 5000);
  //   });
  //   await page.waitForTimeout(100);
  // }

  // 필터 버튼 클릭 시 옵션에 맞게 피드리스트 정렬
  await page.getByRole("radio", { name: "최신 순" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("radio", { name: "댓글 많은 순" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("radio", { name: "조회 순" }).click();
  await page.waitForTimeout(500);
  await page.getByRole("radio", { name: "참여 순" }).click();
  await page.waitForTimeout(500);

  // 종료 투표 포함 토글
  await page.locator("#include-closed-toggle").click();
  await page.waitForTimeout(500);
  await page.locator("#include-closed-toggle").click();
  await page.waitForTimeout(500);

  // 검색 입력
  await page.locator("#search-input").click();
  await page.waitForTimeout(500);
  await page.type("#search-input", "탕");
  await page.waitForTimeout(200);
  await page.type("#search-input", "수");
  await page.waitForTimeout(200);
  await page.type("#search-input", "육");
  await page.waitForTimeout(1000);
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1000);
  await page.fill("#search-input", "");
  await page.waitForTimeout(1000);
  await page.evaluate(() => {
    (document.activeElement as HTMLElement).blur();
  });
  await page.waitForTimeout(1000);

  // 뱃지 클릭

  // 작성자 닉네임 클릭

  // 피드의 메뉴 버튼 클릭 및 신고 기능 이용

  // 피드의 공유 버튼 클릭 및 공유 기능 이용

  // 각 투표항목 카드 hover

  // 댓글 더보기 클릭

  // 투표 생성 페이지 이동 버튼 hover 및 click
  await page.locator("#vote-create-button").hover();
  await page.waitForTimeout(3000);
  await page.locator("#vote-create-button").click();
  await page.waitForTimeout(1000);
  await page.goBack();
  await page.waitForTimeout(1000);

  // 스크린샷 찍기
  await page.screenshot({ path: "testScreenShot/screenshot.png" });

  // 브라우저 종료
  await page.close();
});
