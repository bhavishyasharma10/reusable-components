import { Timeline } from "antd";
import React from 'react';
import { TimeLineItemProps } from "antd/es/timeline/TimelineItem";

interface TimelineStepsProps {
  items: TimeLineItemProps[]
}

export const TimelineSteps: React.FC<TimelineStepsProps> = ({ items }) => { 
  return (<Timeline items={items} />);
};

export default TimelineSteps;
