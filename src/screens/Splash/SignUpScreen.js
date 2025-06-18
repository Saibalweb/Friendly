import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Eye, EyeOff, ArrowLeft } from 'lucide-react-native';

export default function SignUpScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  return (
    <SafeAreaView className="flex-1 bg-black">
      <StatusBar barStyle="light-content" />
      
      {/* Header */}
      <View className="flex-row justify-between items-center px-4 py-2">
        <TouchableOpacity>
          <ArrowLeft size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text className="text-white text-base">Login</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="px-4 pt-6">
        <Text className="text-white text-4xl font-bold mb-2">Sign up</Text>
        <Text className="text-gray-400 text-base mb-8">
          Log in to join the conversation and connect with your community
        </Text>

        {/* Form */}
        <View className="space-y-4">
          {/* Name Row */}
          <View className="flex-row space-x-4">
            <View className="flex-1">
              <Text className="text-white mb-2">First name</Text>
              <TextInput
                className="bg-gray-800/40 rounded-lg px-4 py-3 text-white"
                placeholderTextColor="#666"
                value={formData.firstName}
                onChangeText={(text) => setFormData({ ...formData, firstName: text })}
              />
            </View>
            <View className="flex-1">
              <Text className="text-white mb-2">Last name</Text>
              <TextInput
                className="bg-gray-800/40 rounded-lg px-4 py-3 text-white"
                placeholderTextColor="#666"
                value={formData.lastName}
                onChangeText={(text) => setFormData({ ...formData, lastName: text })}
              />
            </View>
          </View>

          {/* Username */}
          <View>
            <Text className="text-white mb-2">Username</Text>
            <TextInput
              className="bg-gray-800/40 rounded-lg px-4 py-3 text-white"
              placeholderTextColor="#666"
              value={formData.username}
              onChangeText={(text) => setFormData({ ...formData, username: text })}
            />
          </View>

          {/* Email */}
          <View>
            <Text className="text-white mb-2">Email</Text>
            <TextInput
              className="bg-gray-800/40 rounded-lg px-4 py-3 text-white"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
          </View>

          {/* Password */}
          <View>
            <Text className="text-white mb-2">Password</Text>
            <View className="relative">
              <TextInput
                className="bg-gray-800/40 rounded-lg px-4 py-3 text-white pr-12"
                secureTextEntry={!showPassword}
                value={formData.password}
                onChangeText={(text) => setFormData({ ...formData, password: text })}
              />
              <TouchableOpacity 
                className="absolute right-4 top-3"
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color="white" />
                ) : (
                  <Eye size={20} color="white" />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Continue Button */}
        <TouchableOpacity 
          className="bg-purple-500 rounded-lg py-4 mt-8"
          onPress={() => {
            // Handle sign up logic here
            console.log('Sign up:', formData);
          }}
        >
          <Text className="text-white text-center text-lg font-semibold">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}