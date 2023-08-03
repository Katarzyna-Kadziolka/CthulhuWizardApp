import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config, mount } from "@vue/test-utils";
import AttributeDisplay from "../AttributeDisplay.vue";
beforeAll(() => {
  config.global.renderStubDefaultSlot = true;
});

afterAll(() => {
  config.global.renderStubDefaultSlot = false;
});

describe("AttributeDisplay", () => {
  it("Display given label", () => {
    const expectedLabel = "test";
    const wrapper = mount(AttributeDisplay, {
      shallow: true,
      propsData: {
        label: expectedLabel,
      },
    });
    expect(wrapper.find('[data-testid="label"]').text()).toBe(expectedLabel);
  });
  it("Display given text value", () => {
    const expectedValue = "test";
    const wrapper = mount(AttributeDisplay, {
      shallow: true,
      propsData: {
        value: expectedValue,
      },
    });
    expect(wrapper.find('[data-testid="value"]').text()).toBe(expectedValue);
  });
  it("Display given number value", () => {
    const expectedValue = 5;
    const wrapper = mount(AttributeDisplay, {
      shallow: true,
      propsData: {
        value: expectedValue,
      },
    });
    expect(wrapper.find('[data-testid="value"]').text()).toBe(expectedValue.toString());
  });
});
