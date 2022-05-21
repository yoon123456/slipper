import { Steps, Button, message } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";
import New from "../boards/new";
import WritePresenter from "../../src/component/unit/boards/write/write.presenter";
import StepOne from "../../src/commons/multisteps/stepOne";

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
const StepsContent = styled.div`
  min-height: 200px;
  margin-top: 16px;
  padding-top: 80px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
`;
const StepsAction = styled.div`
  margin-top: 24px;
`;

const { Step } = Steps;
const steps = [
  {
    title: "First",
    // content: "First-content",
    content: <StepOne />,
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const TestMultistepsAntd = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <Wrapper>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <StepsContent>{steps[current].content}</StepsContent>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

export default TestMultistepsAntd;
