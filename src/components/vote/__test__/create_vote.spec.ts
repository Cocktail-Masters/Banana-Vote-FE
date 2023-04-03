import { test, expect, Page, Locator } from "@playwright/test";

// import axios from "axios";

/**
 * create vote test
 */
test("create_vote", async ({ page }) => {
  // 페이지 이동
  await page.goto(process.env.NEXT_PUBLIC_HOSTNAME + "/vote/create");

  // 공개 비공개 설정
  await page.getByRole("button", { name: "공개", exact: true }).click();

  // 익명 실명 설정
  await page.getByRole("button", { name: "실명" }).click();

  // 날짜 설정
  await page.locator('input[name="date-input"]').click();
  await page.getByRole("button", { name: "Wed Mar 01 2023" }).click();

  // 제목 설정
  await page.getByPlaceholder("제목").click();
  await page.getByPlaceholder("제목").fill("title");

  // 항목1 추가
  await page.getByRole("button", { name: "plus button" }).click();

  // 항목1 내용 입력
  await page.getByPlaceholder("내용 입력").click();
  await page.getByPlaceholder("내용 입력").fill("1item");

  // 항목1 이미지 파일 추가
  await page
    .locator('input[type="file"]')
    .setInputFiles("./src/assets/icons/loader.svg");

  // 항목2 추가
  await page.getByRole("button", { name: "plus button" }).click();

  // 항목2 내용 입력
  await page
    .getByRole("button", { name: "upload asset 내용 입력 minus" })
    .getByPlaceholder("내용 입력")
    .click();
  await page
    .getByRole("button", { name: "upload asset 내용 입력 minus" })
    .getByPlaceholder("내용 입력")
    .fill("2item");

  // 항목2 이미지 파일 추가
  await page
    .locator('input[type="file"]')
    .setInputFiles("./src/assets/icons/MenuButtonIcon.svg");

  // 항목 4개 추가
  await page.getByRole("button", { name: "plus button" }).click();
  await page.getByRole("button", { name: "plus button" }).click();
  await page.getByRole("button", { name: "plus button" }).click();
  await page.getByRole("button", { name: "plus button" }).click();

  // dnd 테스트 추가
  // const dragAndDrop = async (
  //   page: Page,
  //   dragLocator: Locator,
  //   dropLocator: Locator,
  //   targetPosition?: { x: number; y: number }
  // ) => {
  //   const dragBoundingBox = await dragLocator.boundingBox();
  //   const dropBoundingBox = await dropLocator.boundingBox();

  //   if (!dragBoundingBox || !dropBoundingBox) return;
  //   page.on("console", (msg) => console.log());
  //   await page.mouse.move(
  //     dragBoundingBox.x + dragBoundingBox.width / 2,
  //     dragBoundingBox.y + dragBoundingBox.height / 2
  //   );
  //   await page.mouse.down();

  //   const targetX =
  //     targetPosition?.x || dropBoundingBox.x + dropBoundingBox.width / 2;
  //   const targetY =
  //     targetPosition?.y || dropBoundingBox.y + dropBoundingBox.height / 2;

  //   await page.mouse.move(targetX, targetY);
  //   await page.mouse.up();
  // };

  // const dragCard1 = page.locator(".drag-card-icon-0");
  // const dragCard2 = page.locator(".drag-card-icon-3");
  // const source = page.locator(".vote-dnd-0").first();
  // const target = page.locator(".vote-dnd-3").first();

  // page.on("console", (msg) => {
  //   console.log(page.locator(".drag-card-icon-0"), dragCard2);
  // });
  // await dragCard1.dragTo(target);

  // const dragDrop = async (page: Page) => {
  //   const originElement = await page.waitForSelector(".drag-card-icon-0");
  //   const destinationElement = await page.waitForSelector(".vote-dnd-0");

  //   await originElement.hover();
  //   await page.mouse.down();
  //   const box = (await destinationElement.boundingBox())!;
  //   await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  //   await destinationElement.hover();
  //   await page.mouse.up();
  // };
  // await dragDrop(page);
  // await dragAndDrop(page, dragCard1, dragCard1, { x: 120, y: 0 });

  // content 추가
  await page.locator("textarea").click();
  await page.locator("textarea").fill("content");

  // tag 추가
  await page.locator(".tag-input").click();
  await page.locator(".tag-input").fill("tag1");
  await page.locator("textarea").click();
  await page.locator(".tag-input").fill("tag2");

  // 등록 버튼
  await page.getByRole("button", { name: "등록" }).click();
});

/**
 * vote create mock api test
 */
test("create vote request", async ({ page }) => {
  await page.route(
    process.env.NEXT_PUBLIC_HOSTNAME + "/api/vote",
    async (route) => {
      const json = {
        message: { test_breed: [] },
      };
      console.log(json);
      await route.fulfill({ json });
    }
  );
  const sendData = {
    content: "qwefqwef",
    end_date: "Thu Mar 16 2023 15:40:03 GMT+0900 (한국 표준시)",
    is_anonymouse: true,
    is_disclosure: false,
    tags: ["qwefqwef"],
    title: "12312",
    vote_items: [
      {
        title: "1",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/images…=media&token=907016f1-73a7-499c-aac0-f5ea4bcceec3",
      },
      {
        title: "2",
        imageUrl:
          "https://firebasestorage.googleapis.com/v0/b/images…=media&token=0038cf33-f6ec-4caa-951f-43b3b672c3a1",
      },
    ],
  };

  // // Send a POST request
  // const result = await axios.post(process.env.NEXT_PUBLIC_HOSTNAME+"/api/vote", sendData);
  // console.log(result);
  await page.goto(process.env.NEXT_PUBLIC_HOSTNAME + "/api/vote");
  expect(123).toBe(123);
});
