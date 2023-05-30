import { test, expect } from "@playwright/test";
import { browser } from "process";

test("vote_detail", async ({ page }) => {
  await page.goto("/ko/vote/2");
  const element = await page.locator("#voteItemCardLists > *").first();
  await element.hover();
  await element.click();
  await page.getByRole("button", { name: "투표하기" }).click();
  await page
    .getByRole("button", {
      name: "결과 예측하기",
    })
    .click();
  await page.getByRole("spinbutton").click();
  await page.getByRole("spinbutton").fill("123");
  await page.getByRole("button", { name: "제출" }).click();
  await page.locator("#modalCloseButton").click();
  await page.getByRole("button", { name: "참여하기" }).click();
  await page
    .getByRole("button", { name: "바나나 1600 으로 현재 피캣 바꾸기" })
    .click();
  await page.locator("#picketModalCloseButton").click();
  await page.getByPlaceholder("나의 의견을 전해주세요").click();
  await page.getByPlaceholder("나의 의견을 전해주세요").fill("안녕하세요!");
  await page.locator(".flex > div:nth-child(2) > .flex > button").click();
  await page.getByRole("button", { name: "공감순" }).click();
  await page.getByRole("button", { name: "최신순" }).click();
  await page.getByRole("button");
});
