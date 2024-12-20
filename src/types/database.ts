export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      invoices: {
        Row: {
          id: string;
          user_id: string;
          invoice_number: string;
          total_amount: number;
          tax_rate: number;
          margin: number;
          total_minutes: number;
          call_duration: number;
          client_info: Json;
          agency_info: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          invoice_number: string;
          total_amount: number;
          tax_rate: number;
          margin: number;
          total_minutes: number;
          call_duration: number;
          client_info: Json;
          agency_info: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      profiles: {
        Row: {
          id: string;
          name: string | null;
          location: string | null;
          bio: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name?: string | null;
          location?: string | null;
          bio?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      subscriptions: {
        Row: {
          id: string;
          user_id: string;
          stripe_customer_id: string | null;
          stripe_subscription_id: string | null;
          plan_type: string;
          invoice_count: number | null;
          status: string;
          current_period_end: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          stripe_customer_id?: string | null;
          stripe_subscription_id?: string | null;
          plan_type: string;
          invoice_count?: number | null;
          status: string;
          current_period_end?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}