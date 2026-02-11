import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Step from '../../components/step';

export default function Index()
{
  return (
      <ScrollView contentContainerStyle={styles.page}>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Find Your First Job, Your Way</Text>
          <Text style={styles.heroSubtitle}>
            Discover summer and after-school gigs perfect for teens, near you.
          </Text>

          <TouchableOpacity style={styles.ctaButton} activeOpacity={0.85}>
            <Text style={styles.ctaText}> <Link href="/(tabs)/browse"> Browse Jobs </Link></Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How It Works</Text>

          <View style={styles.steps}>
            <Step
              image={require('../../assets/images/jobsearch.png')}
              title="Search"
              description="Find jobs that fit your schedule and interests."
              accessibilityLabel="Search Jobs Icon"
            />

            <Step
              image={require('../../assets/images/application.png')}
              title="Apply"
              description="Contact employers with just a few clicks."
              accessibilityLabel="Apply Icon"
            />

            <Step
              image={require('../../assets/images/work.png')}
              title="Work"
              description="Start your first gig and gain valuable experience."
              accessibilityLabel="Work Icon"
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Why Choose FirstGig?</Text>

          <View style={styles.steps}>
            <Step
              image={require('../../assets/images/employer.png')}
              title="Trusted Employers"
              description="We partner with reputable businesses looking for young talent."
              accessibilityLabel="Trusted Employers Icon"
            />

            <Step
              image={require('../../assets/images/calendar.png')}
              title="Flexible Hours"
              description="Choose jobs that fit around your school and personal life."
              accessibilityLabel="Flexible Hours Icon"
            />

            <Step
              image={require('../../assets/images/community.png')}
              title="Supportive Community"
              description="Access resources and guidance to help you succeed."
              accessibilityLabel="Supportive Community Icon"
            />
          </View>
        </View>

      </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    paddingBottom: 40,
    backgroundColor: '#edf3ef',
  },

  /* HERO */
  hero: {
    backgroundColor: '#2f7f5f',
    paddingVertical: 60,
    paddingHorizontal: 20,
    borderRadius: 12,
    margin: 16,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#f9fafb',
    textAlign: 'center',
    marginBottom: 24,
    maxWidth: 320,
  },
  ctaButton: {
    backgroundColor: '#2c5eff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  ctaText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  /* SECTIONS */
  section: {
    paddingHorizontal: 16,
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  steps: {
    gap: 16,
  },
});
