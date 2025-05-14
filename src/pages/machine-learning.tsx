// pages/machine-learning.tsx
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import {FC, memo,useState} from 'react';

import ColumnInfo from '../../public/portfolio/ColumnInfo.png';
import FeatureImportance from '../../public/portfolio/FeatureImportance.png';
import Heatmap from '../../public/portfolio/Heatmap.png';
import LinearRegression from '../../public/portfolio/LinearRegression.png';
import Page from '../components/Layout/Page';
import {homePageMeta} from '../data/data';

const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const MachineLearningProjectPage: FC = () => {
  const pageMeta = {
    ...homePageMeta,
    title: `${homePageMeta.title} | Customer Churn Prediction`,
    description: 'Machine learning model predicting customer churn with 92% accuracy',
  };

  const [showCode, setShowCode] = useState(false);

  return (
    <Page description={pageMeta.description} title={pageMeta.title}>
      <Header />
      <main className="pt-20 container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Student-Habits-vs-Academic-Performance</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Machine learning model that predicts student test scores based off other variables
          </p>
          <div className="flex justify-center gap-4">
            <Link className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors" href="#visualizations">
              View Visualizations
            </Link>
            <Link className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" href="https://github.com/yourusername/project-repo" target="_blank">
              GitHub Repository
            </Link>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-900 dark:text-white">Project Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">The Challenge</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Finding out which variables have a high correlation with test scores in the dataset in order to make a linear regression model.
              </p>
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">My Solution</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Since a lot of the columns had categorical non-numerical data, the best solution was to one-hot encode the values so that I could use them in the correlation heatmap.
              </p>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Impact</h3>
              <ul className="space-y-3">
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Was able to see the relationships in data because I used a heatmap</span></li>
                <li className="flex items-start"><span className="text-green-500 mr-2">✓</span><span className="text-gray-700 dark:text-gray-300">Determined that the variable that impacted high test scores the most was the study hours per day</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-900 dark:text-white">Technical Details</h2>
          <div className="mb-8">
            <button
              className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md transition-colors text-sm font-medium"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'Hide Code' : 'View Full Implementation Code'}
            </button>
            
            {showCode && (
              <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono">{`# All Imports
import os
import pandas as pd
from dotenv import load_dotenv
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Loading Dataframe
load_dotenv()
csv_url = os.getenv("CSV_URL")
full_csv_path = os.path.join(csv_url, "student_habits_performance.csv")
df = pd.read_csv(full_csv_path)

# Dropping NaN values because they are irrelevant
df = df.drop(columns=['student_id'])
cleaned_df = df.dropna()
print(cleaned_df.info())
categorical_cols = [
    'parental_education_level',
    'gender',
    'part_time_job',
    'extracurricular_participation',
    'diet_quality',
    'internet_quality'
]

encoded_df = pd.get_dummies(cleaned_df, columns=categorical_cols, dtype=int, drop_first=True)

print(encoded_df.info())

# Ensuring dataframe with only numerical values for correlation heatmap
numerics = ['int16', 'int32', 'int64', 'float16', 'float32', 'float64']
numerical_df = encoded_df.select_dtypes(include=numerics)

correlation = numerical_df.corr()

# Displaying correlation heatmap to see what variables are related
plt.figure(figsize=(12, 8))
sns.heatmap(correlation, cmap='coolwarm', annot=True)
plt.title('Correlation Heatmap for different factors')
plt.show()

# Splitting test and train data
X = encoded_df.drop(columns=['exam_score'])
y = encoded_df['exam_score']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)

print(f"Training features: {X_train.shape}")
print(f"Test features: {X_test.shape}")
print(f"Training target: {y_train.shape}")
print(f"Test target: {y_test.shape}")

# Using LineearRegression sklearn model to predict test scores
model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)

importance = pd.DataFrame({
    'Feature' : X_train.columns,
    'Importance' : model.coef_
}).sort_values('Importance', ascending=False)

print(importance.head(3))

# Display predictions from LinearRegression model
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred, alpha=0.5)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'k--', lw=3, label='Linear Regression Prediction')
plt.xlabel('Actual Values')
plt.ylabel('Predicted Values')
plt.title('Model Performance')
plt.legend()
plt.grid(True)
plt.show()`}</pre>
              </div>
            )}
          </div>
        </section>

        {/* Data Visualizations */}
        <section className="mb-16" id="visualizations">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2 text-gray-900 dark:text-white">Data Visualizations</h2>
          
          {/* Column Info Image */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Data Structure Analysis</h3>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-full h-auto max-h-[800px] overflow-hidden flex justify-center">
                <Image
                  alt="Column information visualization"
                  className="object-contain max-w-full max-h-[800px]"
                  height={1200}
                  quality={100}
                  src={ColumnInfo}
                  width={900}
                />
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                This visual shows the data columns with their types before and after one-hot encoding.
              </p>
            </div>
          </div>

          {/* Features Importance Image */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Feature Importance</h3>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-full h-auto max-h-[600px] overflow-hidden flex justify-center">
                <Image
                  alt="Feature importance visualization"
                  className="object-contain max-w-full max-h-[600px]"
                  height={900}
                  quality={100}
                  src={FeatureImportance}
                  width={1200}
                />
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                The feature importance reveals which factors most significantly impact test scores.
              </p>
            </div>
          </div>

          {/* Heatmap Image */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Correlation Heatmap</h3>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-full h-auto max-h-[800px] overflow-hidden flex justify-center">
                <Image
                  alt="Correlation heatmap visualization"
                  className="object-contain max-w-full max-h-[800px]"
                  height={1000}
                  quality={100}
                  src={Heatmap}
                  width={1000}
                />
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Correlation heatmap showing relationships between different variables in the dataset.
              </p>
            </div>
          </div>

          {/* Linear Regression Scatter Image */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Regression Analysis</h3>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-full h-auto max-h-[600px] overflow-hidden flex justify-center">
                <Image
                  alt="Linear regression scatter plot"
                  className="object-contain max-w-full max-h-[600px]"
                  height={900}
                  quality={100}
                  src={LinearRegression}
                  width={1500}
                />
              </div>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Scatter plot with regression line showing how well the predicted scores are against the actual scores.
              </p>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="mt-12 flex justify-center">
          <Link 
            className="group inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-all duration-200
                      text-blue-600 dark:text-blue-400 hover:text-white dark:hover:text-white
                      bg-transparent hover:bg-blue-600 dark:hover:bg-blue-700
                      shadow-sm hover:shadow-md" 
            href="/#portfolio"
          >
            <svg 
              className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path clipRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" fillRule="evenodd" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </main>
    </Page>
  );
};

export default memo(MachineLearningProjectPage);