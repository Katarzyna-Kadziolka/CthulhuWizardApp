import { afterAll, beforeAll, describe, expect, it, beforeEach } from "vitest";
import { config, mount } from "@vue/test-utils";
import PointsField from "../PointsField.vue";

beforeAll(() => {
  config.global.renderStubDefaultSlot = true;
});

afterAll(() => {
  config.global.renderStubDefaultSlot = false;
});

describe("PointsField", () => {
  let wrapper = mount(PointsField, {
    shallow: true,
    propsData: {
      modelValue: 0,
      "onUpdate:modelValue": (e: number) => wrapper.setProps({ modelValue: e }),
    },
  });
  beforeEach(() => {
    wrapper = mount(PointsField, {
      shallow: true,
      propsData: {
        modelValue: 0,
        "onUpdate:modelValue": (e: number) =>
          wrapper.setProps({ modelValue: e }),
      },
    });
  });

  it("Emit event when value is inputed", async () => {
    const expectedValue = 10;
    const input = wrapper.find('[data-testid="points-field"]');
    await input.setValue(expectedValue);
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  });
});
