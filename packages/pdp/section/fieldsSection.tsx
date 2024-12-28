import { ReactNode, useState } from 'react';

/**
 * Props for the TabbedSection component.
 */
interface TabbedSectionProps {
  tabs: { label: string; key: string; content: ReactNode }[];
}

/**
 * A reusable tabbed section component.
 * Allows rendering of custom tabs and content dynamically.
 *
 * @param {TabbedSectionProps} props - The props for the component.
 */
export default function TabbedSection({ tabs }: TabbedSectionProps) {
  const [activeTab, setActiveTab] = useState<string>(tabs[0]?.key || '');

  /**
   * Handles tab selection by updating the active tab.
   * @param tabKey - The key of the selected tab.
   */
  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="flex items-center border-b-2 border-gray-400 pt-10 pb-3 space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`text-2xl ${activeTab === tab.key ? 'font-bold' : ''}`}
            onClick={() => handleTabClick(tab.key)}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-4">{tabs.find((tab) => tab.key === activeTab)?.content || null}</div>
    </div>
  );
}
