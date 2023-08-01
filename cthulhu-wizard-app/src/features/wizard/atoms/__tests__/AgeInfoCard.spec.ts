import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config, mount } from "@vue/test-utils";
import AgeInfoCard from "../AgeInfoCard.vue";

beforeAll(() => {
  config.global.renderStubDefaultSlot = true;
});

afterAll(() => {
  config.global.renderStubDefaultSlot = false;
});

describe("AgeInfoCard", () => {
  it("If the age is lower than 20, display the appropriate information", () => {
    const expectedValue =
      "Deduct 5 points amongst strength and size. Deduct 5 points from education. Roll twice to generate a Luck score and use the higher value.";
    const wrapper = mount(AgeInfoCard, {
      shallow: true,
      propsData: {
        age: 15,
      },
    });
    expect(wrapper.find('[data-testid="age-info"]').text()).toBe(expectedValue);
  });
  it("If the age is lower than 40 and greater or equal 20, display the appropriate information", () => {
    const expectedValue = "Make an improvement check for education.";
    const wrapper = mount(AgeInfoCard, {
      shallow: true,
      propsData: {
        age: 20,
      },
    });
    expect(wrapper.find('[data-testid="age-info"]').text()).toBe(expectedValue);
  });
  it("If the age is lower than 50 and greater or equal 40, display the appropriate information", () => {
    const expectedValue =
      "Make 2 improvement checks for education and deduct 5 points among strength, constitution or dexterity, and reduce appearance by 5.";
    const wrapper = mount(AgeInfoCard, {
      shallow: true,
      propsData: {
        age: 40,
      },
    });
    expect(wrapper.find('[data-testid="age-info"]').text()).toBe(expectedValue);
  });
  it("If the age is lower than 60 and greater or equal 50, display the appropriate information", () => {
    const expectedValue =
      "Make 3 improvement checks for education and deduct 10 points among strength, constitution or dexterity, and reduce appearance by 10.";
    const wrapper = mount(AgeInfoCard, {
      shallow: true,
      propsData: {
        age: 50,
      },
    });
    expect(wrapper.find('[data-testid="age-info"]').text()).toBe(expectedValue);
  });
  it("If the age is lower than 70 and greater or equal 60, display the appropriate information", () => {
    const expectedValue =
      "Make 4 improvement checks for education and deduct 20 points among strength, constitution or dexterity, and reduce appearance by 15.";
    const wrapper = mount(AgeInfoCard, {
      shallow: true,
      propsData: {
        age: 60,
      },
    });
    expect(wrapper.find('[data-testid="age-info"]').text()).toBe(expectedValue);
  });
  it("If the age is lower than 80 and greater or equal 70, display the appropriate information", () => {
    const expectedValue =
      "Make 4 improvement checks for education and deduct 40 points among strength, constitution or dexterity, and reduce appearance by 20.";
    const wrapper = mount(AgeInfoCard, {
      shallow: true,
      propsData: {
        age: 70,
      },
    });
    expect(wrapper.find('[data-testid="age-info"]').text()).toBe(expectedValue);
  });
  it("If the age is greater or equal 80, display the appropriate information", () => {
    const expectedValue =
      "Make 4 improvement checks for education and deduct 80 points among strength, constitution or dexterity, and reduce appearance by 25.";
    const wrapper = mount(AgeInfoCard, {
      shallow: true,
      propsData: {
        age: 80,
      },
    });
    expect(wrapper.find('[data-testid="age-info"]').text()).toBe(expectedValue);
  });
});
