import React, { useState } from "react";
import { View, Dimensions, ScrollView, Text } from "react-native";
import { MotiView } from "moti";
import { ChartBar as BarChart3 } from "lucide-react-native";
import Sidebar from "@/components/Sidebar";

interface ClassItem {
  id: string;
  name: string;
}

interface Subject {
  id: string;
  name: string;
}

interface Chapter {
  id: string;
  name: string;
  order: number;
}

export default function AnalyticsLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = Dimensions.get("window");
  const isMobile = width < 768;
  const sidebarWidth = 240;

  const [currentView, setCurrentView] = useState<"analytics">("analytics");
  const [analyticsRoute, setAnalyticsRoute] = useState("/analytics/prep-overview");

  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  return (
    <View className="flex-1 bg-slate-900">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={setSidebarOpen}
        selectedClass={selectedClass}
        selectedSubject={selectedSubject}
        selectedChapter={selectedChapter}
        onClassSelect={(cls) => {
          setSelectedClass(cls);
          setSelectedSubject(null);
          setSelectedChapter(null);
          if (isMobile) setSidebarOpen(false);
        }}
        onSubjectSelect={(sub) => {
          setSelectedSubject(sub);
          setSelectedChapter(null);
          if (isMobile) setSidebarOpen(false);
        }}
        onChapterSelect={(ch) => {
          setSelectedChapter(ch);
          if (isMobile) setSidebarOpen(false);
        }}
        onProfileClick={() => isMobile && setSidebarOpen(false)}
        isMobile={isMobile}
        onHomeClick={() => {
          setCurrentView("analytics");
          setAnalyticsRoute("/analytics/prep-overview");
          setSelectedClass(null);
          setSelectedSubject(null);
          setSelectedChapter(null);
          if (isMobile) setSidebarOpen(false);
        }}
        onAnalyticsNavigate={(route) => {
          setAnalyticsRoute(route);
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onConceptMapNavigate={() => {
          setAnalyticsRoute("/analytics/concept-map");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onConfidenceNavigate={() => {
          setAnalyticsRoute("/analytics/confidence-reality");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onSmartRevisionNavigate={() => {
          setAnalyticsRoute("/analytics/smart-revision");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onQuickFixNavigate={() => {
          setAnalyticsRoute("/analytics/quick-fix-lessons");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onAchievementsNavigate={() => {
          setAnalyticsRoute("/analytics/achievements-rewards");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onPeerComparisonNavigate={() => {
          setAnalyticsRoute("/analytics/peer-comparison");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onBuddyModeNavigate={() => {
          setAnalyticsRoute("/analytics/buddy-mode");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
        onDynamicCohortsNavigate={() => {
          setAnalyticsRoute("/analytics/dynamic-cohorts");
          setCurrentView("analytics");
          if (isMobile) setSidebarOpen(false);
        }}
      />

      {/* Main Content */}
      <View className="flex-1" style={{ marginLeft: !isMobile ? sidebarWidth : 0 }}>
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: isMobile ? 16 : 32,
            paddingVertical: isMobile ? 16 : 24,
            flexGrow: 1,
            width: "100%",
          }}
        >
          {/* Analytics Content Placeholder */}
          <MotiView
            from={{ opacity: 0, translateY: 30, scale: 0.95 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            transition={{ type: 'spring', duration: 800, delay: 200 }}
            className="bg-slate-800/60 rounded-2xl p-8 border border-slate-700/40 shadow-lg"
            style={{
              shadowColor: '#3b82f6',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 6,
            }}
          >
            <View className="items-center text-center">
              <View className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl items-center justify-center mb-6">
                <BarChart3 size={40} color="#60a5fa" />
              </View>
              
              <Text className="text-4xl font-bold text-slate-100 mb-4">
                Analytics Dashboard
              </Text>
              
              <Text className="text-slate-300 text-lg mb-6 text-center max-w-2xl">
                Welcome to your Analytics-only scaffold. This clean foundation includes authentication, 
                navigation, and design system - ready for you to build powerful analytics components.
              </Text>

              <View className="bg-slate-700/40 rounded-xl p-6 border border-slate-600/30 max-w-md">
                <Text className="text-slate-100 font-semibold mb-3 text-center">
                  Current Route
                </Text>
                <Text className="text-blue-400 font-mono text-sm text-center">
                  {analyticsRoute}
                </Text>
              </View>
            </View>
          </MotiView>

          {/* Infrastructure Status */}
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', duration: 600, delay: 400 }}
            className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/40 mt-6"
          >
            <Text className="text-slate-100 font-semibold mb-4">Infrastructure Status</Text>
            <View className="space-y-3">
              <View className="flex-row items-center justify-between">
                <Text className="text-slate-300 text-sm">Authentication (Supabase)</Text>
                <Text className="text-emerald-400 text-sm font-medium">✓ Ready</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-slate-300 text-sm">Navigation System</Text>
                <Text className="text-emerald-400 text-sm font-medium">✓ Ready</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-slate-300 text-sm">Design System</Text>
                <Text className="text-emerald-400 text-sm font-medium">✓ Ready</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-slate-300 text-sm">Database Schema</Text>
                <Text className="text-emerald-400 text-sm font-medium">✓ Ready</Text>
              </View>
              <View className="flex-row items-center justify-between">
                <Text className="text-slate-300 text-sm">Analytics Components</Text>
                <Text className="text-amber-400 text-sm font-medium">⏳ Ready to Build</Text>
              </View>
            </View>
          </MotiView>

          {/* Next Steps */}
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'spring', duration: 600, delay: 600 }}
            className="bg-slate-700/40 rounded-xl p-6 border border-slate-600/30 mt-6"
          >
            <Text className="text-slate-100 font-semibold mb-4">Next Steps</Text>
            <View className="space-y-3">
              <View className="flex-row items-start">
                <Text className="text-blue-400 font-bold mr-3">1.</Text>
                <Text className="text-slate-300 text-sm flex-1">
                  Create analytics components in the components/ directory
                </Text>
              </View>
              <View className="flex-row items-start">
                <Text className="text-blue-400 font-bold mr-3">2.</Text>
                <Text className="text-slate-300 text-sm flex-1">
                  Add route handling in AnalyticsLayout for different analytics views
                </Text>
              </View>
              <View className="flex-row items-start">
                <Text className="text-blue-400 font-bold mr-3">3.</Text>
                <Text className="text-slate-300 text-sm flex-1">
                  Connect to Supabase data using the existing database schema
                </Text>
              </View>
              <View className="flex-row items-start">
                <Text className="text-blue-400 font-bold mr-3">4.</Text>
                <Text className="text-slate-300 text-sm flex-1">
                  Implement charts and visualizations using the existing design system
                </Text>
              </View>
            </View>
          </MotiView>
        </ScrollView>
      </View>
    </View>
  );
}