export interface PaymentMethodContainer {
  current_page?: number;
  data?: PaymentMethod[];
  first_page_url?: string;
  from?: number;
  last_page?: number;
  last_page_url?: string;
  next_page_url?: string | null;
  path?: string;
  per_page?: number;
  prev_page_url?: string | null;
  to?: number;
  total?: number;
}

export interface PaymentMethod {
  id?: string;
  name?: string;
  description?: string;
  status_id?: number;
  icono?: string;
  filesToUpload?: object;
  nameFolder?: string;
  created_at?: string;
  updated_at?: string;
}
