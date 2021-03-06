/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import styles from 'lib/styles/build/js/design_tokens';
import { Button, ContentModal, Tabs, Tab, TabPanel, TabList, Icon } from '@';

const tabLabels = ['Activity Feed', 'Access Control', 'Security Options'];
const ModalContentTabs = () => (
  <>
    <Tabs size={Tabs.SIZE.SMALL}>
      <TabList>
        {tabLabels.map((label) => (
          <Tab>{label}</Tab>
        ))}
      </TabList>
      {tabLabels.map((label) => (
        <TabPanel>
          <div style={{ padding: '20px' }}>Content for tab {label}</div>
        </TabPanel>
      ))}
    </Tabs>
  </>
);

const ModalContentPinkBox = () => (
  <div
    style={{
      background: styles.vds.color.red.lightest.value,
      width: '100%',
      height: '150px',
    }}
  />
);

storiesOf('ContentModal', module)
  .lokiSkip('default', () => {
    const title = object('Title', { key: 'Filename', value: 'january-reports.pdf' });
    const subtitle = text(
      'Subtitle',
      'Google Drive file shared by khart@acmecorp.com on November 16, 2020, 7:16 am',
    );
    const titleIconName = text('Title Icon', Icon.NAMES.PDF);
    const subtitleIconName = text('Subtitle Icon', Icon.NAMES.DRIVE);

    return (
      <ContentModal
        header={<Button variant={Button.VARIANT.SECONDARY} size={Button.SIZE.SQUARE} />}
        title={title}
        subtitle={subtitle}
        titleIconName={titleIconName}
        subtitleIconName={subtitleIconName}
        onRequestClose={() => alert('close')}
        onRequestBack={() => alert('back')}
      >
        {ModalContentTabs()}
      </ContentModal>
    );
  })
  .add('no icons', () => (
    <ContentModal title={{ value: 'Random Title' }} subtitle="Random subtitle">
      {ModalContentPinkBox()}
    </ContentModal>
  ));
